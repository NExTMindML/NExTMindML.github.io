import { Component } from "@angular/core";

export interface Card {
    tittle: String;
    python?: boolean;
    miner?: boolean;
    excel?: boolean;
    minutesRead: number;
    cardId: any;
    labels?: any;
}