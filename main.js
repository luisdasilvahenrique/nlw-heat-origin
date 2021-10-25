const LinksSocialMedia = {
    github: 'luisdasilvahenrique',
    youtube: 'UC34AXdpl4_2g3QIWjHaN-mA',
    facebook: 'luis.enrik.52',
    instagram: 'luis_enrik_21',
    twitter: 'maykbrito',
  }

  function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
      const social = li.getAttribute('class')
      
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      // alert(li.children[0].href)
    }

  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`
//pegando dados do github com o Json
      fetch(url)
      .then(response => response.json())
      .then(data => {
          UserName.textContent = data.name,
          UserBio.textContent = data.bio,
          UserProfile.href = data.html_url,
          UserImage.src = data.avatar_url,
          UserLogin.textContent = data.login
      })
    }
    getGitHubProfileInfos()