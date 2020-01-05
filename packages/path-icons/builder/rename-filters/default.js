import path from 'path';

function defaultDestRewriter(svgPathObj, innerPath, options) {
  let fileName = svgPathObj.base;
  fileName = fileName.replace(/^ic_/, '').replace('.svg', `${options.size}.tsx`);
  fileName = fileName.replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());
  fileName = fileName.substring(0, 1).toLowerCase() + fileName.substring(1);
  return path.join(innerPath, fileName);
}

export default defaultDestRewriter;
