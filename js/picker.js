
var text;
var names = new Array('Barbara McFell',
                      'Tempo McKeteketly',
                      'Maonga Irpaae',
                      'Denz',
                      'Jose Tunisia',
                      'Bob Bobson',
                      'Harold Greenoff',
                      'Jeff Penn',
                      'Ewan Freedom',
                      'Benjamin Turkin',
                      'Robert Harper',
                      'Sally Cladwell',
                      'Gregory Tomson',
                      'Benita Dano',
                      'Tameka Chea',
                      'Fernando Guntrum',
                      'Cody Devita',
                      'Margery Moloney',
                      'Jessie Wagar',
                      'Jessie Burkhard',
                      'Cody Lamotte',
                      'Tabatha Cantley',
                      'Hugh Fullwood',
                      'Emilia Janusz',
                      'Erik Taketa',
                      'Lenore Laughter',
                      'Kathrine Palazzo',
                      'Lonnie Garron',
                      'Tyrone Shott',
                      'Gay Duble',
                      'Pearlie Newberg',
                      'Clinton Rayl',
                      'Louisa Strey',
                      'Saundra Ingenito',
                      'Fernando Jenkin',
                      'Maricela Tonkin',
                      'Allie Borjas',
                      'Clinton Rickenbacker',
                      'Cody Golay',
                      'Jerri Tienda',
                      'Nita Pippen',
                      'Alejandra Bonhomme',
                      'Nelson Eguia',
                      'Rae Velasques',
                      'Boyce Edeker',
                      'Cedrick Culotti',
                      'Elenora Nagindas',
                      'Arletta Miran',
                      'Alica Knudsvig',
                      'Von Ostroot',
                      'Tomika Nuesca',
                      'Felton Pattinson',
                      'Cristopher Laper',
                      'Shonna Parrotta',
                      'Sarina Macurdy',
                      'Waylon Companie',
                      'Shon Carratura',
                      'Jae Kneser',
                      'Janett Papiernik',
                      'Lynwood Bellar',
                      'Jeramy Contopoulos',
                      'Hong Nederostek',
                      'Gigi Mccarn',
                      'Sid Mursko',
                      'Bielser',
                      'Jospeh Lustberg',
                      'Spring Luckinbill',
                      'Ciera Chionchio',
                      'Marleen Litchard',
                      'Eldridge Brynga',
                      'Leif Dinho',
                      'Gigi Kornblatt',
                      'Idell Chagollan',
                      'Michale Mcclod'
                      );

function reset(){
  // re-enable go button
  setTimeout("$('#go').removeAttr('disabled')",11005);
  var namesbreak = "";
  if(gup('names') != ""){
    var names = gup('names');
    namesbreak = names.replace(/101/g,'\n');
    namesbreak = namesbreak.replace(/%20/g,' ');          
    }
    else   {
      var names = new Array('Barbara McFell',
                      'Tempo McKeteketly',
                      'Maonga Irpaae',
                      'Jose Tunisia',
                      'Bob Bobson',
                      'Harold Greenoff',
                      'Jeff Penn',
                      'Ewan Freedom',
                      'Benjamin Turkin',
                      'Robert Harper',
                      'Sally Cladwell',
                      'Gregory Tomson',
                      'Benita Dano',
                      'Tameka Chea',
                      'Fernando Guntrum',
                      'Cody Devita',
                      'Margery Moloney',
                      'Jessie Wagar',
                      'Jessie Burkhard',
                      'Cody Lamotte',
                      'Tabatha Cantley',
                      'Hugh Fullwood',
                      'Emilia Janusz',
                      'Erik Taketa',
                      'Lenore Laughter',
                      'Kathrine Palazzo',
                      'Lonnie Garron',
                      'Tyrone Shott',
                      'Gay Duble',
                      'Pearlie Newberg',
                      'Clinton Rayl',
                      'Louisa Strey',
                      'Saundra Ingenito',
                      'Fernando Jenkin',
                      'Maricela Tonkin',
                      'Allie Borjas',
                      'Clinton Rickenbacker',
                      'Cody Golay',
                      'Jerri Tienda',
                      'Nita Pippen',
                      'Alejandra Bonhomme',
                      'Nelson Eguia',
                      'Rae Velasques',
                      'Boyce Edeker',
                      'Cedrick Culotti',
                      'Elenora Nagindas',
                      'Arletta Miran',
                      'Alica Knudsvig',
                      'Von Ostroot',
                      'Tomika Nuesca',
                      'Felton Pattinson',
                      'Cristopher Laper',
                      'Shonna Parrotta',
                      'Sarina Macurdy',
                      'Waylon Companie',
                      'Shon Carratura',
                      'Jae Kneser',
                      'Janett Papiernik',
                      'Lynwood Bellar',
                      'Jeramy Contopoulos',
                      'Hong Nederostek',
                      'Gigi Mccarn',
                      'Sid Mursko',
                      'Bielser',
                      'Jospeh Lustberg',
                      'Spring Luckinbill',
                      'Ciera Chionchio',
                      'Marleen Litchard',
                      'Eldridge Brynga',
                      'Leif Dinho',
                      'Gigi Kornblatt',
                      'Idell Chagollan',
                      'Michale Mcclod'
                      );
    for(var i in names){
      name = names[i];
      if (name == "" || typeof(name) == undefined){}else{
         namesbreak = namesbreak + name + "\n";
      }
    }
  }
  $("#namesbox").val(namesbreak);
}

function gup(para)
{
  para = para.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+para+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

function randOrd(){
	return (Math.round(Math.random())-0.5); 
}

function save(){
        $("#varnote").hide();
        $("#popdown").show();
        $("#values").hide();
        $("div").remove("#result1");
        savenames = $("#namesbox").val();
        savenames = savenames.replace(/\n\r?/g, '101');
        $('#headline').fadeOut();
        $('#headline').text('The name list is saved and updated.').fadeIn();
        $("#names").show();
        $('#namesbox').attr('disabled','disabled');
}

function namelist(){
        $("#varnote").hide();
        $('#namesbox').removeAttr('disabled','disabled');
        $('#headline').text('Configure name list');
        $("#popdown").show();
        $("#values").hide();
        $("#names").show();
        $('body').css({"overflow-y": "visible"});
}

// does the actual animation
function go(){
  $("#varnote").hide();
  $('body').css({"overflow-y": "hidden"});
  $('#go').attr('disabled','disabled');
  $('#list').attr('disabled','disabled');
  $('#save').attr('disabled','disabled');
  $('#headline').slideUp();
  $('#namesbox').slideDown();

  var count = 1;
  count = 1;
  $("div").remove("#result1");
  names = $("#namesbox").val();
  if(document.all) { // IE
    names=names.split("\n");
  }
  else { //Mozilla
    names=names.split("\n");
  }
  $("#values").show();
  $(".name").show();
  $("#popdown").hide();
  $("div").remove(".name");
  $("div").remove(".extra");
  $("#playback").html("");
  newtop = names.length * 200 * -1;
  //$('#values').css({top: -300});
  $('#values').css({top: + newtop});	
  names.sort( randOrd );
  var fruits = new Array ( "apple", "pear", "orange", "banana" );
  //console.log(fruits);
  //console.log(names);
  //alert(newtop);
  for(var i in names){
    if (names[i] == "" || typeof(names[i]) == undefined){
      count = count-1;

    } else {
      name = names[i];
      //console.log(name);
      $('#values').append('<div id=result'+count+' class=name>'+name+'</div>');
    }
    count = count+1;
  }
  for(var i in names){
    if (names[i] == "" || typeof(names[i]) == undefined){}else{
      name = names[i];
      $('#values').append('<div class=name>'+name+'</div>');
    }
    count = count+1;
  }
  for(var i in names){
    if (names[i] == "" || typeof(names[i]) == undefined){}else{
      name = names[i];
      $('#values').append('<div class=name>'+name+'</div>');
    }
    count = count+1;
  }
  text = $('#result1').text()
  $('#values').animate({top: '+220'},9000);

  // make it stand out
  setTimeout("standout(text)",9000);
  //setTimeout("$('#playback').hide('slow')",11005);
}

function standout(text){

        $('#result1').removeClass('name');
        $('.name').animate({opacity: .25});
        $('#result1').animate({height: '+=60px'});
        $('#result1').append('<div class="extra"><a class="small alert button" href="#" onClick="removevictim();">Remove name from list</a></div>');
        $('#go').removeAttr('disabled','disabled');
        $('#list').removeAttr('disabled','disabled');
        $('#save').removeAttr('disabled','disabled');
        $('#headline').text('Found the Winner!');
        $('#headline').slideDown();
}

function removevictim(){
	// Removing victim from array and UI
	// names = names.filter(function(){ return true});
	// Rewriting namesbox contents
	var nameupdated = "";
	for(var i in names){
		name = names[i];
                if (name == "" || name == text || typeof(name) == undefined){}else{
			nameupdated = nameupdated + "\n" + name;
		}
	}
	$('#namesbox').val("");
  $('#namesbox').val(nameupdated);
  $('#result1').html("Removed");
  $('#result1').fadeOut(1500, function(){
    $("div").remove("#result1");
  });
  $("div").remove(".name");
  $("div").remove(".extra");
  $('#headline').text('OK, done! Let\'s see who is next? Just click "GO!" button for next roll.');
}