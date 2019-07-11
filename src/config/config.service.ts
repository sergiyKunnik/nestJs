import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  private env: string = '';
  constructor(folder: string) {
    if (process.env.NODE_ENV) this.env = process.env.NODE_ENV
    console.log('env => ', this.env)
    this.envConfig = dotenv.parse(fs.readFileSync(`${folder}/${this.env}.env`))
    console.log('this.envConfig => ', this.envConfig)
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}