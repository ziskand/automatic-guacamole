<script>
    export let name;
    export let avatarSrc;
    export let job;
    export let email;
    export let phone;
</script>

<div class="md:flex bg-white rounded-lg p-6">
    <img
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src={avatarSrc}
        alt="Avatar"
    />
    <div class="text-center md:text-left">
        <h2 class="text-lg">{name}</h2>
        <div class="text-purple-500">{job}</div>
        <div class="text-gray-600">{email}</div>
        <div class="text-gray-600">{phone}</div>
    </div>
</div>
