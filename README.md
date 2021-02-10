# Nativescript Installation  For Windows

1. Run cmd as administrator 
2. Run this command and say Yes for all questions.
    
```  
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"
```

3- After installation is done, go to Environment Variables and set the variables as follows.

## Local user variables
```
ANDROID_HOME =  C:\Users\<username>\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT = C:\Users\<username>\AppData\Local\Android\Sdk
```
Then set the paths as follows.

```
%ANDROID_HOME%\tools
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
```

Finally, DELETE all android related paths and UPDATE the ANDROID_HOME from  System Variables  

```
.../tools
.../platform-tools
.../tools-bin
```

```
ANDROID_HOME = C:\Users\<username>\AppData\Local\Android\Sdk
```

DONE!




