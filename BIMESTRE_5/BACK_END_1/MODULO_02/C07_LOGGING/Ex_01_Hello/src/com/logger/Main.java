package com.logger;

import org.apache.log4j.Logger;

public class Main {
    private static Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args){
        logger.info("Hello World");
        System.out.println("Hello");
    }
}
