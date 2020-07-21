function createMultiplyTable(start, end) {
  if(!isValid(start,end))return "null";
  return generateAllLine(start,end);
}

module.exports = {
  createMultiplyTable,
};
function isValid(start ,end){
  if(isStartNotBiggerThanEnd(start,end)&&isInrange(start)&&isInrange(end)){
    return true;
  }
  else return false;
}
function isStartNotBiggerThanEnd(start, end ){
  if(start>end)return false;
  else return true;
}
function isInrange(num){
  if(num>=1&&num<=1000)return true;
  else return false;
}
function generateAllLine(start,end){
  const lineArray=new Array();
  for(let i=start;i<=end;i++){
    lineArray.push(generateLine(start,i));
    
  }
  return lineArray.join("\n");
}
function generateLine(lineStart,lineEnd){
  let line="";
  for(let i=lineStart;i<=lineEnd;i++){
    line+=generateExpression(i,lineEnd);
    if(i<lineEnd)line+="\t";
  }
  return line;
}
function generateExpression(multiplicand,multiplier){
  return multiplicand+"*"+multiplier+"="+(multiplier*multiplicand);
}
