# Getting Graphical Utilities to Work on WSL

## [__Check this article about native WSL support first__](https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps)

## Older Instructions:
> Instructions taken from https://techcommunity.microsoft.com/t5/windows-dev-appconsult/running-wsl-gui-apps-on-windows-10/ba-p/1493242

1. Get VcXsrv Windows X Server

    [Download the X Server for Windows here](https://sourceforge.net/projects/vcxsrv/) and install.
    
    * During setup is important to disable the access control to avoid the permission denied error when trying to run a GUI application:
        
        ![image](https://user-images.githubusercontent.com/29618911/150582899-57664df9-3818-4de7-83eb-6dceb7d3cce7.png)
    * To make sure that "Disable access control" will alwasy be checked, save the configuration and always launch VcXsrv using the config file (config.xlaunch)
        
        ![image](https://user-images.githubusercontent.com/29618911/150582968-2620ca11-1658-475c-9743-f272513e4a5a.png)

    * Also make sure to allow VcXsrv in the Windows firewall settings (make sure private is checked too, apparently):
        
        ![image](https://user-images.githubusercontent.com/29618911/150583025-22233ed2-cbb7-4088-a681-9c85d37d617a.png)

1. Set the DISPLAY environment variable on WSL to use the Windows host's IP address (because WSL2 and Windows host are not on the same network device). It's necessary to set the DISPLAY environment variable with the correct IP address on launch.

    There are 3 ways to do it (the first one worked just fine for me):
    
    ```
    export DISPLAY="`grep nameserver /etc/resolv.conf | sed 's/nameserver //'`:0"
    ```

    ```
    export DISPLAY="`sed -n 's/nameserver //p' /etc/resolv.conf`:0"
    ```

    ```
    export DISPLAY=$(ip route|awk '/^default/{print $3}'):0.0
    ```
    
    __To avoid having to run that command every time that WSL is launched, you can add the command to the end of your `/etc/bash.bashrc` file.__
    ![image](https://user-images.githubusercontent.com/29618911/150583406-cde4200a-bfab-4489-9eff-9623abadf40e.png)

1. It's also necessary to create a .xsession file in the user's home directory (/home/<user>/.xsession) with the content xfce4-session:

    ```
    echo xfce4-session > ~/.xsession
    ```
1. Done!
