(function($) {
  $(document).ready(function() {
    var switchBtn = true;

    function getCityList() {
      if (!switchBtn) {
        $('.city-choose-wrap').hide();
        switchBtn = true;
      } else {
        $('.city-choose-wrap').show();
        switchBtn = false;
        $('.city-btn').css('color', '#000');
      }
      switchBtn != switchBtn;
    }
    $('.city-btn').click(function(){
      getCityList();
    })
    function getAreaList() {
      if (switchBtn) {
        if ($('.city-choose').html() != "") {
          if ($(".city-btn .first-option").attr("id") == -1) {
            $('.area-choose-wrap').hide();
            switchBtn = true;
            alert('请选择城市');
          } else {
            $('.area-choose-wrap').show();
            switchBtn = false;
            $('.area-btn').css('color', '#000');
          }
        }
      } else {
        $('.area-choose-wrap').hide();
        switchBtn = true;
      }
      switchBtn != switchBtn;
    }
    $('.area-btn').click(function(){
      getAreaList();
    })
    function getCityListChoose(data) {
      //此处注释需要调用接口，为了测试方便所以注释了
      /*$.kOnnectorAjax({
        url: '/ELearningMall/GetSubAreas',//根据实际项目的接口而定
        success: function(result) {
          $('.city-choose').empty();
          $('.city-btn p.first-option').replaceWith('<p id="-1" class="first-option">' + ElTranslation.ChooseCity + '</p>');
          var lessonHtml = "",
            resultList;
          if (result.Status == "200" && !result.Message) {
            resultList = result.Data;
            if (resultList && resultList.length) {
              $.each(resultList, function(index, ele) {
                lessonHtml += '<p id=' + ele.Id + '>' + ele.Name;
                lessonHtml += '</p>';
              });
              $('.city-choose').append(lessonHtml);
              cityChoose();
            }
          } else {
            message.alert(result.Message);
          }
        }
      }, {
        loading: true
      });*/
      $('.city-choose').empty();
      $('.city-choose').append('<p id="110000">宁波</p><p id="120000">上海</p><p id="130000">北京</p>');//为了测试方便随便写死的数据
      cityChoose();
    }

    function cityChoose() {
      if ($('.city-choose').html() != "") {
        $('.city-choose p').each(function() {
          $(this).click(function() {
            $('.city-btn p.first-option').replaceWith('<p id=' + $(this).attr('id') + ' class="first-option chossed-opt">' + $(this).html() + '</p>');
            $('.area-btn').css('color', '#000');
            //getAreaListChoose();
          })
        });
      }
    }

    function getAreaListChoose() {
      var ParentAreaId = $(".city-btn .chossed-opt").attr("id");
      //此处注释需要调用接口，为了测试方便所以注释了
      /*$.kOnnectorAjax({
        url: '/ELearningMall/GetSubAreas',//根据实际项目的接口而定
        data: {
          areaId: ParentAreaId
        },
        success: function(result) {
          $('.area-choose').empty();
          $('.area-btn p.first-option').replaceWith('<p id="-1" class="first-option">' + ElTranslation.ChooseArea + '</p>');
          var lessonHtml = "",
            resultList;
          if (result.Status == "200" && !result.Message) {
            resultList = result.Data;
            if (resultList && resultList.length) {
              $.each(resultList, function(index, ele) {
                lessonHtml += '<p id=' + ele.Id + '>' + ele.Name;
                lessonHtml += '</p>';
              });
              $('.area-choose').append(lessonHtml);
              areaChoose();
            }
          } else {
            message.alert(result.Message);
          }
        }
      }, {
        loading: true
      });*/
      $('.area-choose').empty();
      $('.area-choose').append('<p id="150402">红山区</p><p id="150403">元宝山区</p><p id="150404">松山区</p><p id="150421">阿鲁科尔沁旗</p>');//为了测试方便随便写死的数据
      areaChoose();
    }

    function areaChoose() {
      if ($('.area-choose').html() != "") {
        $('.area-choose p').each(function() {
          $(this).click(function() {
            $('.area-btn p.first-option').replaceWith('<p id=' + $(this).attr('id') + ' class="first-option chossed-opt">' + $(this).html() + '</p>');
          })
        });
      }
    }

    function progressCloseBtn() {
      $('.close-btn').click(function() {
        $('.choose-wrap').hide();
      })
    }
    function mouseLeave() {
      $(".city-btn").mouseleave(function(){
        $('.city-choose-wrap').hide();
        switchBtn = true;
      });
      $(".area-btn").mouseleave(function(){
        $('.area-choose-wrap').hide();
        switchBtn = true;
      });
    }
    getCityListChoose();
    getAreaListChoose();
    progressCloseBtn();
    mouseLeave();
  });
})(jQuery);
