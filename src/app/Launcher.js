import { Server } from '../app/Server/Server.js'

export class Launcher {

    launchApp(){
        new Server().startServer();
    }
 }

 new Launcher().launchApp();