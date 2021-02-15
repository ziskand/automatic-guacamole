import * as sapper from '@sapper/app';
import { initFeatureToggles } from "./feature-toggles";

initFeatureToggles();
sapper.start({
	target: document.querySelector('#sapper')
});