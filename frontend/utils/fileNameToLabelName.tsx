const fileNameToLabelName = (fileDirName: string, labelName: HTMLElement) => {
  const fileName = fileDirName.split("\\").pop();
  if (!fileName) return;
  labelName.nextElementSibling!.innerHTML = fileName;
};

export default fileNameToLabelName;
