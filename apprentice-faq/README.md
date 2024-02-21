# Apprentice Mentor FAQ

Q: I can't push to Github
A: Confirm that the student ran through the `Git and Github Account Setup` activity in the prep course and has a SSH key. Also check the remote url (`git remote -v`) and make sure that it is using SSH and not HTTPS.

Q: I keep getting "cannot find module 'module-name'" errors
A: Check that the module name is spelled correctly and that the pathing for local files is correct. If the module is external, it may need to be installed.

Q: Node tells me that the address is in use when I try to start my server
A: Check for additional terminal windows where the server might be running. Try to find the PID using `lsof -i` and then kill it. If all else fails, restarting the computer will terminate all running processes (and free up the ports).

Q: I can't see my database tables _or_ relation "table-name" does not exist error
A: Make sure that the student is connected to the correct database (the db name will be in the terminal prompt). They might have run the database setup against their default database (their username or `labber`).

Q: I get an error when I try to include SQL files using `\i` in the `psql` terminal
A: `psql` "remembers" which directory it was in when it opened. All paths will be relative to that directory. The easiest fix is to quit out of `psql` and launch it again from a known directory.
