/*
TODO
- GetContent by id to change scenerio
- GetContent by tag to replace with image
- How to make people press Enter
*/
console.log("Internal JS file connected!");

$("#card-1").html("<p>&nbsp;&nbsp;&nbsp;&nbsp;คุณเป็นพนักงานบริษัทเอกชนที่นึง คุณได้รับมอบหมายให้ประเมินผลการทำงานของทีมตัวเอง แต่คุณไม่มีความสามารถในการทำความเข้าใจข้อมูลผลการทำงานที่คุณมีซึ่งลูกน้องคุณส่งมาให้ คุณมีงบประมาณสำหรับจัดการเรื่องนี้อยู่นิดหน่อย คุณเลยมองหาบริการ หรือคนที่จะช่วยให้คุณทำเอกสารส่งหัวหน้าคุณได้ ในอีก 2 สัปดาห์ข้างหน้า<hr><b>พิมพ์คำค้นหาลงไปในกล่องข้อความ เพื่อหาอะไรที่น่าจะช่วยคุณได้</b></p>");
$("#card-2").html("<p>&nbsp;&nbsp;&nbsp;&nbsp;คุณเป็นพนักงานบริษัทเอกชนที่นึง คุณได้รับมอบหมายให้แจกแบบสอบถามเพื่อประเมินความพึงพอใจเกี่ยวกับนโยบายใหม่ของบริษัท เมื่อคุณเก็บแบบสอบถามจนครบ คุณกะจะค่อยๆอ่านทีละใบเพื่อสรุปผล แต่คุณกลับพบว่าข้อมูลมันมากเกิน และคุณก็ยังสรุปอะไรไม่ได้ คุณมีงบประมาณสำหรับจัดการเรื่องนี้อยู่นิดหน่อย คุณเลยมองหาบริการ หรือคนที่จะช่วยให้คุณวิเคราะห์ข้อมูลเหล่านี้และทำเอกสารงานวิจัยเพื่อนำเสนอให้แก่หัวหน้า  ในอีก 2 สัปดาห์ข้างหน้า<hr><b>พิมพ์คำค้นหาลงไปในกล่องข้อความ เพื่อหาอะไรที่น่าจะช่วยคุณได้</b></p>");
$("#card-3").html("<p>&nbsp;&nbsp;&nbsp;&nbsp;คุณเป็นเจ้าของกิจการร้านกาแฟที่นึง คุณต้องการจะวิเคราะห์ผลการทำงาน ของเว็บไซด์ของร้านกาแฟคุณ คุณมีฐานข้อมูลครบถ้วน แต่คุณไม่มีความรู้เรื่องการวิเคราะห์ข้อมูลเลย คุณมีงบประมาณสำหรับจัดการเรื่องนี้อยู่นิดหน่อย  คุณเลยมองหาบริการ หรือคนที่จะช่วยให้คุณวิเคราะห์ข้อมูล และคำแนะนำได้  ในอีก 2 สัปดาห์ข้างหน้า<hr><b>พิมพ์คำค้นหาลงไปในกล่องข้อความ เพื่อหาอะไรที่น่าจะช่วยคุณได้</b></p>");
$("#card-4").html("<p>&nbsp;&nbsp;&nbsp;&nbsp;คุณเป็นพนักงานบริษัทเอกชนที่นึง คุณได้รับมอบหมายให้วิเคราะห์ความต้องการลูกค้าในรอบ 3 ปีที่ผ่านของบริษัท ซึ่งถูกเก็บอยู่ในไฟลล์ฐานข้อมูลของบริษัทแต่ลูกน้องที่เคยช่วยคุณทำหน้าที่ตรงนี้เพิ่งออกจากงานไป คุณเลยมองหาบริการ หรือคนที่จะช่วยให้คุณเข้าใจความต้องการลูกค้า เพื่อนำเสนอกับหัวหน้าในอีก 3 สัปดาห์ข้างหน้าได้<hr><b>พิมพ์คำค้นหาลงไปในกล่องข้อความ เพื่อหาอะไรที่น่าจะช่วยคุณได้</b></p>");
$("#toggle-button-1").text("คลิกเพื่อเปิดสถานการณ์ที่ 1");
$("#toggle-button-2").text("คลิกเพื่อเปิดสถานการณ์ที่ 2");
$("#toggle-button-3").text("คลิกเพื่อเปิดสถานการณ์ที่ 3");
$("#toggle-button-4").text("คลิกเพื่อเปิดสถานการณ์ที่ 4");


$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });
  
$("#search_keyword_1").on("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#link-1").click();
    }
});
$("#search_keyword_2").on("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#link-2").click();
    }
});
$("#search_keyword_3").on("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#link-3").click();
    }
});
$("#search_keyword_4").on("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#link-4").click();
    }
});


$(".logo").attr('src','Logo – 2.png'); // For LOGO

