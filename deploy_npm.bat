@echo off
@chcp 1250 >nul
ECHO Po pojawieniu siê "Username" podaj login do rejestru NPM
CALL npm login

ECHO Jestes poprawnie zalogowany jako:
CALL npm whoami

ECHO.
ECHO Po zapisaniu zmian w notatniku wróc do konsoli i wciœnij enter
REM Otwiera notepad aby zmieniæ wersje ####################################
notepad package.json

ECHO Po wciœniêciu enter zmiany bêd¹ publikowane w rejestrze NPM
ECHO.
pause >nul
ECHO Zmiany s¹ teraz publikowane w rejestrze NPM
CALL npm install
CALL rmdir node_modules\jsql-core /s /q
CALL npm install jsql-core
CALL grunt && cd dist
CALL npm publish

REM wylogowuje ############################################################
CALL npm logout

ECHO.
ECHO Nacisnij aby zakoñczyæ
pause >nul
cd ..