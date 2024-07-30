require('newrelic')
import { Injectable } from '@nestjs/common';
import 'reflect-metadata';
const NewrelicFormatter = require('@newrelic/winston-enricher')

@Injectable()
export class NewRelicService {
    public readonly newRelicFormater
    constructor() {
        this.newRelicFormater = NewrelicFormatter;
    }
}