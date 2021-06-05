import { UrlObject } from "url";
import { InvalidArgument } from "../errors/invalidArg";
import _ from 'lodash';

export class URlLogin {
  public static parseURL(urlRef: string): UrlObject {

    if (_.isEmpty(urlRef)) throw new InvalidArgument('Invalid URL');
    const newUrl = new URL(urlRef);
    return newUrl;
  }
}
