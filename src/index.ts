import * as cryptojs from "crypto-js";

class Block{


  static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string):string =>cryptojs.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock:Block) : boolean =>
      typeof aBlock.index === "number" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.previousHash ==="string" &&
      typeof aBlock.timestamp ==="number" &&
      typeof aBlock.data === "string";



      public index : number;
      public hash : string;
      public previousHash : string;
      public data : string;
      public timestamp : number;


  constructor(index:number, hash:string, previousHash:string, data:string, timestamp:number){
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }

}


const genesisBlock:Block = new Block(0,"20202020202020202","","hello",1234567);
let blockchain:Block[] = [genesisBlock];



const getBlockchain = ():Block[] => blockchain;
console.log(getBlockchain());
const getLatestBlock = ():Block => getBlockchain()[blockchain.length - 1];
console.log(getLatestBlock());



const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
  const previousBlock : Block = getLatestBlock();
  const newIndex : number = previousBlock.index + 1;
  const newTimestamp : number = getNewTimeStamp();
  const newHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
  const newBlock : Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(
  aBlock.index,
  aBlock.previousHash,
  aBlock.timestamp,
  aBlock.data
)

const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
  if(!Block.validateStructure(candidateBlock) )
    return false;
  else if(previousBlock.index + 1 !== candidateBlock.index)
    return false;
  else if(previousBlock.hash !== candidateBlock.previousHash)
    return false;
  else if(getHashforBlock(candidateBlock) !== candidateBlock.hash)
    return false;
  else
    return true;
}


const addBlock = (candidateBlock: Block): void => {
  if(isBlockValid(candidateBlock, getLatestBlock())){
    blockchain.push(candidateBlock);
  }
}



createNewBlock("second Block");
createNewBlock("third Block");
createNewBlock("forth Block");

console.log(blockchain);







export{};


// /*
// 리턴 할 수 있는 값을 정의 내릴 수 있다.
// */
//
// class Human{
//   public name: string;
//   public age : number;
//   public gender : string;
//   //private
//
//   constructor(name:string, age:number, gender:string){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//
//
// }
//
// // interface Human {
// //   name:string,
// //   age:number,
// //   gender:string
// // }
//
// // const person = {
// //   name : "geonil",
// //   age : 28,
// //   gender : "mail"
// // }
//
//
//
// const geonil = new Human("geonil",27,"mail");
//
// const sayHi = (person:Human): string => {
//   return `Hello ${person.name}, you are ${person.age}, ${person.gender} 할룽`;
// }
//
// console.log(sayHi(geonil));
// export {};
