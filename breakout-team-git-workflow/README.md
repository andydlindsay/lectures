## Team Git Workflow

### To Do
- [ ] Git vs Github
- [ ] Cloning vs Forking
- [ ] Merge Conflicts
- [ ] Team Git Workflow
- [ ] Other People's Branches

### Git vs Github
* git is version control software installed on your computer
* git allows a developer to store incremental changes to code (commits) over time
* Changes are stored locally in a directory called `.git`
* Github is a website owned/run by Microsoft for storing git repositories remotely (non-local)
* Github allows multiple developers to collaborate/share code

### Cloning vs Forking
* Cloning a repo creates a local copy of the code
* Cloning automatically creates a remote called origin which points to the main/master branch of the cloned repo on Github
* Forking a repo creates a copy of a repo on Github
* Forking does not link back to the original and any updates to the original are not automatically made in the fork
* Forking does not create a local git repo (the forked repo would need to be cloned to get a local copy)
* "Use this template" button is similar to forking a repo (it creates a copy on Github), but it does not contain the commit history of the original repo

### Merge Conflicts
* A merge conflict arises when two (or more) developers edit the same code in a file; git cannot automatically merge the changes because it is not sure which code to keep and which code to overwrite/delete
* Merge conflicts frequently occur when collaborating with other devs
* VS Code provides an easy-to-use interface for settling merge conflicts; it gives us several choices including:
  * `Accept Current Change`: keep your changes to the code
  * `Accept Incoming Change`: overwrite your local code with the changes being pulled down
  * `Accept Both Changes`: keep both developers' changes to the code
* When in doubt, talk with the other developer to make sure what changes should be kept and which should be discarded

### Team Git Workflow
* One team member will create the repo on Github
* Other team members will be added as collaborators using the Settings menu (team members will **not** create their own fork)
* The creator and any collaborators will be able to push/pull code from/to the repo
* Each team member should be working only on branches and **not** directly on master/main
* When a branch is ready to merge into main, it can be done locally or on Github (via a Pull Request)
* Each team member is responsible for keeping their working branches up-to-date with the main branch; this means periodically checking out main and pulling down the latest code and then merging it into their working branch and settling any merge conflicts that arise
* Best practice is to continuously keep your branch up-to-date and not to wait until you are ready to merge into main to pull other people's changes

### Other People's Branches
* It is possible to pull someone else's branch if they have pushed it to Github; create a local branch and then pull the specific branch that you are interested in with `git pull origin name-of-branch`
* It is possible to branch off of another branch if you run the checkout command on a branch other than main/master
* Please use caution when branching off a branch as merging everything back into main can be confusing

### Useful Links
* [Collaborating with Git/Github Steps](https://gist.github.com/andydlindsay/c0dd09a93d603b64a6fec7addd3a92e5)
