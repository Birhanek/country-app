export  const Languages = (languages:{[key:string]:string})=>{

    const languageList = []
    for(const language in languages){
      languageList.push(languages[language])
    }
    return languageList
  }
