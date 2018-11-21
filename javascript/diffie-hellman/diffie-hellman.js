export default class DiffieHellman {
  constructor(p, g) {
    const isPrime = n => {
      if (n === 2 || n === 3){
        return n;
      };
      if (n % 2 === 0 || n % 3 === 0){
        throw new Error();
      };
      let i = 5;
      let w = 2;

      while (i * i <= n) {
        if (n % i === 0) {
          throw new Error();
        };
        i += w;
        w = 6 - w;
      }
      return n;
    }
    this.p = isPrime(p),
    this.g = isPrime(g)
  }

  getPublicKeyFromPrivateKey(privateKey) {
    let publicKey = this.g ** privateKey % this.p;
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error();
    }
    return publicKey;
  }

  getSharedSecret(privateKey, publicKey) {
    let sharedSecret = publicKey ** privateKey % this.p;
    return sharedSecret;
  }
}
