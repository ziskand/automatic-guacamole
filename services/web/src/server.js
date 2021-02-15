import http from "http";
import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

/**
 * This helps with Firebase Hosting's implicit
 * URLs that start with "/__/". Any request
 * from the Sapper web app to this path prefix are
 * redirected to localhost:5000 where "firebase serve"
 * listens and responds with the correct response.
 */
const devFirebaseServe = (req, res, next) => {
	if (dev && req.url.startsWith("/__/")) {
		http.get(
			{
				hostname: "localhost",
				port: 5000,
				path: req.url,
			},
			(firebaseServeResponse) => {
				firebaseServeResponse.pipe(res);
			}
		);
	} else {
		next();
	}
};

polka()
	.use(
		compression({ threshold: 0 }),
		sirv("static", { dev }),
		devFirebaseServe,
		sapper.middleware()
	)
	.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
