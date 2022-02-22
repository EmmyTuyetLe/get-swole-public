# get-swole

A fitness app for users to log their workouts, track weights/prs, calculate weights needed and also upload/share fitness tips with other users

## Contributing

### Setup

1. Fork this repo
2. Clone your forked repo onto your local computer and remember to run "npm install" to install all packages.
3. Run this command once to setup upstream
   > git remote add upstream https://github.com/EmmyTuyetLe/get-swole-public.git

Now you're all set up.  
**_The following steps must be run periodically to keep your work up-to-date! You can run these commands as often as possible. You want to fetch any new changes as soon as possible. Each time you want to begin working, or take a break from your work, run these first._**  
Be sure to commit all local changes first.

1. Switch to the development branch
<pre>git checkout development</pre>
2. Get all remote upstream changes into your local computer.
<pre>git fetch upstream</pre>
3. Merge changes fetched with your local development branch. ('development' must be the currently checked-out branch)
<pre>git merge upstream/development</pre>
4. Push the newly merged changes to your fork's remote (online) repo. This is configured as 'origin' by default.
<pre>git push origin development</pre>

If you've created a new branch to work on rather than working directly on `development`, then run the next steps.

5. Switch to your feature branch.
<pre>git checkout your-feature-branch</pre>
6. Merge the changes on the newly merged development branch, into your feature branch.
   <pre>git merge development</pre>

   _You may encounter merge conflicts here.
   [Resolve them](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line),
   then come back and complete the merge. If you merge often enough, any conflicts would be trivial and very few._

7. Finally, push your newly merged feature branch to the remote github server for backup.
<pre>git push origin your-feature-branch</pre>

##### Pull Requests

Once you are done working on your feature, you may go on to https://github.com/EmmyTuyetLe/get-swole-public.git to create apull request between your fork and the project repo.
# get-swole-public
