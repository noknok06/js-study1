$(document).on("click", "#test_button", function(){
    let target = $("#target");
    let target_elements = target.attr("class");
    alert(target_elements);

    if (target_elements === ""){
        target.addClass("is-active");
    }else{
        target.removeClass("is-active");
    }
});