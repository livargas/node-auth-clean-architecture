import jwt from "jsonwebtoken";
import { envs } from './envs';

const JW_SEED = envs.JW_SEED;

export class JwtAdapter {
  static generateToken(
    payload: Object,
    duration: string = "2h"
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, JW_SEED, { expiresIn: duration }, (error, token) => {
        if (error) resolve(null);

        resolve(token!);
      });
    });
  }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, JW_SEED, (error, decoded) => {
        if (error) resolve(null);

        resolve(decoded as T);
      });
    });
  }
}
