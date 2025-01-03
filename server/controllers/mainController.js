//GET Homepage

exports.homepage = async(req,res) =>{
  const locals = {
    title:'NodeJs Notes',
    description: 'Free NodeJs Notes app.',
  };

  res.render('index', locals);
}

//GET About

exports.about = async(req,res) =>{
  const locals = {
    title:'About - NodeJs Notes',
    description: 'Free NodeJs Notes app.',
  };

  res.render('about', locals);
}




