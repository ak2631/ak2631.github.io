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
	var websiteMeta = {"4b567641c4bd7a87227eb8d04dd06db3-13.html":"Sarah Saddoris was awarded the prestigious Goldwater Scholarship. Keep up the fantastic scholarly and research activity.","b6fed30e212001b13181727676369bbc-16.html":"Lexiang was awarded the Ying Xu Outstanding Student Paper Award from the Institute of Bioinformatics.","7aa0e33bb06605d2deffd996fe3aedcf-49.html":"We're happy that Dr. Xiuling Shi has finally joined our group. We hope you enjoy your new home. ","30795344784cc338b8773927240fb337-32.html":"Congratulations to Brigitte for being awarded an NIH Training Grant Fellowship for her studies of plant epimutations. ","f000297a22a22f97cc4b8b90a6da67e1-25.html":"Congratulations to Brigitte for being awarded the Ying Xu Outstanding Student Paper Award from the Institute of Bioinformatics","0f1723878f6bad5c5c728ede438a53ea-43.html":"We are announcing at #PAGXXIII the release of an updated version of Plant Methylome DB, which includes 20 unpublished DNA methylomes. ","archive-2023.html":"Archives for 2023","archive-2016.html":"Archives for 2016","97b02aaa70acfda0e53d46ba1772a9e8-17.html":"Congratulations to Pablo for being awarded a position on the departmental NIH Training Grant. Excellent job!\nThis is not an April Fools joke.\n\n","2c31bdb28ed5e73233ff872c22e472b0-52.html":"Chad's review on the inheritance of DNA methylation variants in plant genomes is out. ","1cc1cc46c0bd46cf30fb447622532882-22.html":"Jered was awarded a 3 year fellowship from the National Plant Genome Initiative funded by the NSF. Congratulations, Jered!","fc13d032d6bd15a676c649e1e8745bd5-24.html":"Lexiang Ji was awarded the \"Outstanding Self-Financed Students Abroad\" by the China Scholarship Council.","8cfde64ca4bce0515e9e66a9cab44524-26.html":"Congratulations William for being awarded an Innovative and Interdisciplinary Research Grant from the UGA Graduate School","245e4c73a6eefa4b0a0cdd03d5e46fc1-35.html":"Another preprint from the lab on extensive natural variation of DNA methylation between angiosperm species bioRxiv ","5f24a50a51d467b30f435a4d6ea61b74-42.html":"Productive and fun collaboration with Steen Ooi's lab at UCL on establishment of DNA methylation patterns during spermatogenesis. Online today in Cell","4fa4cf9d5fddaef6ed82c45c5e36aba7-39.html":"In collaboration with the lab of Chuan He at the University of Chicago we've created a novel method to identify N4-methylcytosines in bacterial genome","ce0ccb82a7b81dac8db37e79fdaecebf-33.html":"Pat was named the Cynthia Kenyon Awardee at the Genetics Graduation Event. This award recognizes a student based on excellence in academics, research ","fa7b73cb3a421412412816423589c6bf-37.html":"Congratulations to Madeline Steffensen for being awarded a 2015 CURO Research Assistantship. ","archive-2022.html":"Archives for 2022","archive-2015.html":"Archives for 2015","cfa6f0f2b2a2acbfa032b196fc7f3ef0-54.html":"We're looking for a new postdoctoral fellow to join our team. See the ad. ","f2b5f0b021873deb8dbf02364f0e5244-50.html":"Congratulations to Patrick Griffin who will be a CURO Fellow in the lab this summer. ","592387a75654ba706267a5e28f901861-41.html":"We're sad to see our all-star technician leave the lab today, but we're happy he is taking the next step in his career. Good luck! ","b4d270692881b55af5eeabc712c79a4d-29.html":"Congratulations to Brigitte and Will for being awarded a position on the NIH departmental NIH Training Grant. Keep up the great work. ","fc9d26502c1c76c086bcd266650a3711-8.html":"Pablo Mendieta has been awarded the 2021-2022 Linton and June Bishop Fellowship by the Genetics Graduate Affairs Committee. Congratulations, Pablo! ","1ca8a205073061e3bc5310c70ee25353-56.html":"Congratulations to the Plant Center Retreat 2024 poster winners! Ankush won 1st place in the graduate student section and Ziliang won 1st place in the","archive-2021.html":"Archives for 2021","archive-2014.html":"Archives for 2014","39d0385b74b9f6bc90b60ed8c00e2674-5.html":"Cullan Meyer wins a position on the NIH Genetics Training Grant for 2022-2023. Congratulations, Cullan!\n","13ac8d999dd702ce618faabbba43a723-40.html":"Bob was named a Pew Scholar and the lab received funding from the Pew Charitable Trusts to support research on epigenetic variants. ","754df10a82c8c6b6cd71f46effc0086d-34.html":"Pat just submitted his study that he started as an undergraduate. Taught himself programming with help from the lab. Nice work. bioRxiv ","79de3488a32f18e37f3e0c0325334074-3.html":"Pablo Mendieta was awarded a Doctoral Dissertation Improvement Grant from The Plant Center.","04167fafea0629767f67ac5c80f490f0-27.html":"Kudos to William Jordan who placed 1st in the graduate student poster competition at UGA's Plant Center retreat and to Adam who placed 3rd within the ","5e52f7933af4344931aad27d22944c56-30.html":"Congratulations to Lexiang for being awarded the Ying Xu Outstanding Student Paper Award from the Institute of Bioinformatics. ","77c2e84c5e9e799bf90fc642a4b40b49-18.html":"We are so excited for Callan Russell who was the only person selected out of 55 individuals to participate in the genetic counseling internship at the","archive-2019.html":"Archives for 2019","4e5ed85da35ad9ee8898717ccaed86ed-15.html":"Congratulations to former undergraduates Patrick Griffin who was awarded an NSF-GRFP and Kitra Cates who received an honorable mention.","49b5c2a29a12f87dc6889bbf6cb7a9ea-7.html":"Congratulations Sohyun Bang for winning the Summer Research Grant for 2022! Keep up the good work! \n","c4a8e2bd82f16d409438531920341b40-14.html":"Congratulations to Faheem for being awarded a Summer CURO Research Assistantship!","203b880e848cc65f05c76378badda45e-12.html":"Congratulations to Madge for being awarded a Spring 2020 CURO Research Assistantship! Way to go!","635a00109d0645f6b50f2c1ae2d02c3c-51.html":"Chad was awarded a 3 year fellowship from the National Plant Genome Initiative funded by the NSF. Nice work! ","38f9ec7fa0543951c66b503f6bcb3eaa-46.html":"Congratulations to Pat Griffin for being awarded a CURO Research Assistantship! ","archive-2020.html":"Archives for 2020","8ffb86a15307c375d4852e77f1179451-20.html":"Callan was the recipient of a CURO Research Fellowship. Well done!","archive-2013.html":"Archives for 2013","d3fdd9f2ad87834c1fef21fc42597d98-6.html":"Bob is a finalist for the 2022 Blavatnik National Awards for Young Scientists, the world's largest unrestricted prize honoring early-career scientists","269b24d43cec9719411eabdbbb34cfa8-11.html":"Sohyun Bang and Michael Francis won second place for their DNA signification entry Music of Life in the 2019 UGA Capturing Science Contest! Congratula","c38c37b7d884e24cce5266656a893c48-48.html":"Eichten S, Schmitz RJ, Springer NM. (2014) Epigenetics; beyond chromatin modifications and complex gene regulatory systems. Plant Physiology Jul 165(3","archive-2025.html":"Archives for 2025","archive-2018.html":"Archives for 2018","a1cd343cbfa760ed1f6f1c9efeb5090c-0.html":"Cullan Meyer has been selected by the NIH Genetics training grant committee as a recipient of a 2023-2024 training fellowship! Bravo!  ","35d6735174b3e4e086b56033b33ecd22-28.html":"Chad has accepted a position as an Assistant Professor at Michigan State University. Congratulations! Best of luck with your new adventure.","ebc8a1f2213754799d8be3eaa7d76c00-31.html":"Adam and others have developed a novel set of models to estimate context-specific methylation levels in any sample regardless of the availability of a","a91e12671ecad371d53928e269fe762a-2.html":"Congratulations to Sohyun Bang (3rd) and Mark Minow (2nd) for their poster awards in the student and postdoc competitions at The Plant Center Retreat!","a178cac82ac493b264db35bdfe8a4d9c-1.html":"￼￼￼\n\n","3c7db470818b11ae27e4d97ef6a50802-36.html":"A truly collaborative effort put forth to understand the origins and evolutionary consequences of gene body DNA methylation in plant genomes. bioRxiv","3bef21d78469cafafb7a7050a275bfe5-45.html":"Ji L, Sasaki T, Sun X, Ma P, Lewis ZA, Schmitz RJ. (2014) Methylated DNA is over-represented in whole-genome bisulfite sequencing data. Frontiers in G","dc383229ee65fed2b2a5fe99e9841cd5-47.html":"Read our new study led by Pat West (a superstar undergraduate) and Qing Li from Nathan Springer's Lab at UM… Genomic distribution of H3K9me2 and DNA m","d634a57db18ba95f3ced732257db3821-38.html":"Congratulations to Kitra Cates for being awarded a 2015 CURO Research Assistantship. ","5526956a5f6c816f9faa8e8705210716-53.html":"Welcome Kelly Lane to our lab as the first graduate students from the Genetics Department! ","e2ac116e23994b36657feb4892f54df3-10.html":"Congratulations to Callan for winning the 2020 Cynthia Kenyon Award, given to one outstanding graduating UGA senior majoring in Genetics. Callan is he","12a6f034ebb962a79667b1e6196d5856-19.html":"The Plant Center fall retreat had 98 posters this year and William Jordan placed 2nd in the graduate student poster category and Jered Wendte placed 2","2cb4c264ec9f2bae24406007a43b0f6b-44.html":"Brigitte has joined our lab and the Institute of Bioinformatics. Welcome! ","a91e639d9f652b394933dccaebb64842-21.html":"Well done Tina and Zach for their awards for their poster presentations at the departmental retreat!","494638bcc0ffcb114d88c3e573d54972-59.html":"Congratulations to Alex Tadros for being selected as a 2025-26 NIH Genetics Training Grant fellow! Way to go!","archive-2024.html":"Archives for 2024","archive-2017.html":"Archives for 2017","94c419fcf776b080157a1eadad8ebab5-55.html":"The website is up and running and we are looking for people interested in joining our group in Fall 2013. ","223df41cdf759cddd56523dd258ae41d-23.html":"Congratulations to Will for being awarded a position on the departmental NIH Training Grant. Well deserved.","263fa6539a3673e02629fd576ddb9f67-9.html":"Faheem has been selected as one of a select few UGA undergraduate students to receive this year's Presidential Award of Excellence! Keep up the good w","2d3945e957186645a322db7cc3b94e51-58.html":"Big congrats to Nan — now officially Dr. Yao! We're so proud and can't wait to see what's next for you! ","9fe98efe88a6edc11f138723f1b3f09c-4.html":"Aryan Thakur wins Spring 2023 CURO Research Award! Congratulations, Aryan!\n"};
 
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