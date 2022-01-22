<h1 align="center">Go Mummy </h1>

GoMummy is the WomenCentric Website working to develop and uphold standards and create an environment in which every woman can stand up and claim their space and live up to her full potential.

<br />
<h2> 
📌<a href="https://mgjain9871.github.io/GoMummy/" target="_blank">Visit our website 🚀</a>
</h2>
<br />

## 📌 Sneak Peek of Main Page


# Theme


### Killing The Cliche:- 


<br />

## 📌 Tech Stack

![HTML](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)

<br />
<h1 align=center> OUR TEAM✨ </h1>
<p align="center">
  
	
<a href="https://github.com/mgjain9871/GoMummy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mgjain9871/GoMummy" />
</a>  

<h1> Contributing Guidelines </h1>

## Basics of Git and GitHub

### Git & GitHub

Before we proceed, it's better to know the difference between Git and Github. Git is a version control system (VCS) that allows us to keep track of the history of our source code , whereas GitHub is a service that hosts Git projects. 

We assume you have created an account on Github and installed Git on your System.

Now enter your name and E-mail (used on Github) address in Git, by using following command.

`$ git config --global user.name "YOUR NAME"`
` $ git config --global user.email "YOUR EMAIL ADDRESS"`
This is an important step to mark your commits to your name and email.

<br />

### Fork a project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>
Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

<br />

<br />

### Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

`$ git clone https://github.com/mgjain9871/GoMummy.git` <br/>
Now you have the project on your local machine.

<br />

### Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

`$ cd <your-forked-project-folder>`
`$ git remote add upstream https://github.com/mgjain9871/GoMummy.git` <br/>
You will see the benefits of adding remote later.

<br />

### Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

`$ git checkout main`
`$ git fetch upstream`
`$ git merge upstream/main`
`$ git push origin main` <br/>
The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

<br />

### Create a new branch for a feature or bugfix

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

`$ git checkout -b <feature-branch>`
This will create a new branch out of master branch. Now start working on the problem and commit your changes.

`$ git add --all`
`$ git commit -m "<commit message>"`
The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

<br />

### Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

`$ git push origin <feature-branch>`
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bug fix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be main and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

Congratulations! You've already made your first contribution.🥳

Good Luck for your journey



© 2022 Mitul Jain and contributors

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

