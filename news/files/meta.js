(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"4b567641c4bd7a87227eb8d04dd06db3-13.html":"Sarah Saddoris is a Goldwater Scholar","b6fed30e212001b13181727676369bbc-16.html":"Lexiang does it again!","7aa0e33bb06605d2deffd996fe3aedcf-49.html":"Welcome Xiuling","30795344784cc338b8773927240fb337-32.html":"Brigitte is a new NIH Fellow","f000297a22a22f97cc4b8b90a6da67e1-25.html":"Brigitte is the 2018 Xu Award Winner","0f1723878f6bad5c5c728ede438a53ea-43.html":"Plant Methylome DB (Updated)","archive-2023.html":"Archives for 2023","archive-2016.html":"Archives for 2016","97b02aaa70acfda0e53d46ba1772a9e8-17.html":"Pablo is an NIH Training Grant Awardee!","2c31bdb28ed5e73233ff872c22e472b0-52.html":"Review Time","1cc1cc46c0bd46cf30fb447622532882-22.html":"Jered is an NSF PD Fellow","fc13d032d6bd15a676c649e1e8745bd5-24.html":"Well deserved award to Lexiang Ji","8cfde64ca4bce0515e9e66a9cab44524-26.html":"William Jordan is awarded an IIRG","245e4c73a6eefa4b0a0cdd03d5e46fc1-35.html":"Study on natural variation of mC from the lab","5f24a50a51d467b30f435a4d6ea61b74-42.html":"Genome-wide establishment of mouse methylation","4fa4cf9d5fddaef6ed82c45c5e36aba7-39.html":"4mC-TAB-seq","ce0ccb82a7b81dac8db37e79fdaecebf-33.html":"Pat Griffin - Cynthia Kenyon Awardee","fa7b73cb3a421412412816423589c6bf-37.html":"CURO Research Assistantship awarded to Madeline","archive-2022.html":"Archives for 2022","archive-2015.html":"Archives for 2015","cfa6f0f2b2a2acbfa032b196fc7f3ef0-54.html":"Postdoc position available","f2b5f0b021873deb8dbf02364f0e5244-50.html":"Pat's a CURO Fellow","592387a75654ba706267a5e28f901861-41.html":"Drexel sets off for medical school ","b4d270692881b55af5eeabc712c79a4d-29.html":"NIH Training grant awardees","fc9d26502c1c76c086bcd266650a3711-8.html":"Pablo wins the Linton and June Bishop Fellowship!","archive-2021.html":"Archives for 2021","archive-2014.html":"Archives for 2014","39d0385b74b9f6bc90b60ed8c00e2674-5.html":"Cullan wins NIH Genetics Training Grant","13ac8d999dd702ce618faabbba43a723-40.html":"Pew Scholar in Biomedical Sciences","754df10a82c8c6b6cd71f46effc0086d-34.html":"Nice new study by Pat Griffin","79de3488a32f18e37f3e0c0325334074-3.html":"Pablo Mendieta wins a Doctoral Dissertation Improvement Grant!","04167fafea0629767f67ac5c80f490f0-27.html":"Poster Award Winners","5e52f7933af4344931aad27d22944c56-30.html":"Lexiang wins Ying Xu Price","77c2e84c5e9e799bf90fc642a4b40b49-18.html":"Callan earned a summer internship","archive-2019.html":"Archives for 2019","4e5ed85da35ad9ee8898717ccaed86ed-15.html":"NSF GRFP awards","49b5c2a29a12f87dc6889bbf6cb7a9ea-7.html":"Sohyun Bang wins the Summer Research Grant","c4a8e2bd82f16d409438531920341b40-14.html":"Faheem is a CURO fellow!","203b880e848cc65f05c76378badda45e-12.html":"Madge Stuhlreyer is a CURO fellow!","635a00109d0645f6b50f2c1ae2d02c3c-51.html":"Congratulations Chad! ","38f9ec7fa0543951c66b503f6bcb3eaa-46.html":"Pat does it again...","archive-2020.html":"Archives for 2020","8ffb86a15307c375d4852e77f1179451-20.html":"Callan is a CURO Fellow","archive-2013.html":"Archives for 2013","d3fdd9f2ad87834c1fef21fc42597d98-6.html":"2022 Blavatnik National Awards Finalist","269b24d43cec9719411eabdbbb34cfa8-11.html":"Sohyun Bang wins 2019 UGA Capturing Science Contest!","c38c37b7d884e24cce5266656a893c48-48.html":"New Review with Nathan Springer's Group ","archive-2018.html":"Archives for 2018","3c7db470818b11ae27e4d97ef6a50802-36.html":"New study on gbM","a1cd343cbfa760ed1f6f1c9efeb5090c-0.html":"Hats off to Cullan for winning NIH training grant two years in row!","35d6735174b3e4e086b56033b33ecd22-28.html":"Chad's a new Assistant Professor","ebc8a1f2213754799d8be3eaa7d76c00-31.html":"FASTmC","a91e12671ecad371d53928e269fe762a-2.html":"Poster winners at the Plant Center Retreat! ","a178cac82ac493b264db35bdfe8a4d9c-1.html":"2023 CURO Symposium","3bef21d78469cafafb7a7050a275bfe5-45.html":"Caution with WGBS data ","dc383229ee65fed2b2a5fe99e9841cd5-47.html":"Maize Epigenomics","5526956a5f6c816f9faa8e8705210716-53.html":"Welcome Kelly!","d634a57db18ba95f3ced732257db3821-38.html":"Kitra awarded a CURO RA","e2ac116e23994b36657feb4892f54df3-10.html":"Callan Russell is the recipient of the 2020 Cynthia Kenyon Award!","12a6f034ebb962a79667b1e6196d5856-19.html":"Plant Center Poster Awardees","2cb4c264ec9f2bae24406007a43b0f6b-44.html":"Welcome Brigitte Hofmeister ","a91e639d9f652b394933dccaebb64842-21.html":"Department Retreat Awardees","archive-2017.html":"Archives for 2017","94c419fcf776b080157a1eadad8ebab5-55.html":"We have a website! ","223df41cdf759cddd56523dd258ae41d-23.html":"Will is an NIH TG Awardee","263fa6539a3673e02629fd576ddb9f67-9.html":"Congratulations Faheem Pottayil for winning the 2021 Presidential Award of Excellence!","9fe98efe88a6edc11f138723f1b3f09c-4.html":"Aryan Thakur is a CURO Fellow"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();