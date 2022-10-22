# Getting started

- Clone the repository

# Local development

- Make sure to install the node modules dependency by running either `yarn` or `nmp install `

# Development using docker

- Make sure you have installed Docker.
- Navigate to task-app folder (root).
- Build the docker image by running the command `docker build -t taskapp/latest .` `taskapp/latest` it's the image name, feel free to replace with another name.
- Make sure you image was created by running the docker command `docker image ls` and make sure `taskapp/latest` is being listed.
- Map the port `3000` that is the default port of react app to you preferred machine port, in my case I'll map to 5000 `docker run -p 5000:3000 taskapp/latest`
- Open you favorite browser and hit `http://localhost:5000` and you should be able to see the app running locally.

# Develop ui components using storybook

- run `yarn storybook` to see the ui components
