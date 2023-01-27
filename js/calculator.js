var cssId = "fp-style",
    version = "1.0.1";
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");
    link.id = cssId,
    link.rel = "stylesheet",
    link.type = "text/css",
    link.href = "" + version,
    link.media = "all",
    head.appendChild(link)
}
function set_parent_container() {
    var t = document.getElementById("fp-code"),
        e = t.closest("div").offsetWidth,
        o = "";
    e >= 980 ? o = "w980" : e >= 495 && (o = "w495"),
    t.setAttribute("class", o),
    console.log(o)
}
set_parent_container(),
window.addEventListener("resize", (function(t) {
    set_parent_container()
}), !0);
var fp_code_wrapper = document.getElementById("fp-code");
document.getElementById("fp_code_inner") && document.getElementById("fp_code_inner").remove();
var fp_attribute_calc = fp_code_wrapper.getAttribute("data-calc"),
    fp_attribute_lang = fp_code_wrapper.getAttribute("data-lang"),
    fp_attribute_unit = fp_code_wrapper.getAttribute("data-unit"),
    fp_attribute_bg_color = fp_code_wrapper.getAttribute("data-bg-color"),
    fp_attribute_alt_bg_color = fp_code_wrapper.getAttribute("data-alt-bg-color"),
    fp_attribute_txt_color = fp_code_wrapper.getAttribute("data-txt-color"),
    fp_attribute_alt_txt_color = fp_code_wrapper.getAttribute("data-alt-txt-color"),
    fp_attribute_pri_color = fp_code_wrapper.getAttribute("data-pri-color"),
    fp_attribute_sec_color = fp_code_wrapper.getAttribute("data-sec-color"),
    fp_code_inner = document.createElement("div");
fp_code_inner.setAttribute("id", "fp_code_inner");
var check_fp_copyright_link = check_fp_copyright(),
    arr_your_result = {
        de: "Dein Ergebnis",
        en: "Your result",
        fr: "Ton résultat",
        es: "Su resultado",
        pt: "O seu resultado",
        it: "Il vostro risultato",
        pl: "Twój wynik"
    },
    arr_missing_data = {
        de: "Es werden ein paar Informationen benötigt! Prüfe, ob alle Angaben eingetragen wurden.",
        en: "Some information is needed! Check if all information has been entered.",
        fr: "Quelques informations sont nécessaires ! Vérifie que toutes les informations ont été saisies.",
        es: "Se necesita algo de información. Compruebe que se ha introducido toda la información.",
        pt: "É necessária alguma informação! Verificar se toda a informação foi introduzida.",
        it: "Sono necessarie alcune informazioni! Verificare che tutte le informazioni siano state inserite.",
        pl: "Potrzebne są pewne informacje! Sprawdź, czy wszystkie informacje zostały wprowadzone."
    },
    arr_iframe_detected = {
        de: "Es wurde ein iFrame erkannt. Bitte binde den HTML-Code direkt in deine Webseite ein, damit der Rechner korrekt dargestellt werden kann.",
        en: "An iFrame was detected. Please embed the HTML code directly into your web page so that the calculator can display it correctly.",
        fr: "Un iFrame a été détecté. Veuillez intégrer le code HTML directement dans votre page web afin que l'ordinateur puisse s'afficher correctement.",
        es: "Se ha detectado un iFrame. Por favor, inserte el código HTML directamente en su sitio web para que la calculadora pueda mostrarlo correctamente.",
        pt: "Foi detectado um iFrame. Por favor, insira o código HTML directamente no seu website para que a calculadora o possa exibir correctamente.",
        it: "È stato rilevato un iFrame. Inserite il codice HTML direttamente nel vostro sito web in modo che la calcolatrice possa visualizzarlo correttamente.",
        pl: "Wykryto ramkę iFrame. Proszę osadzić kod HTML bezpośrednio na swojej stronie, aby kalkulator mógł go poprawnie wyświetlić."
    },
    arr_copyright_error1 = {
        de: "Das FoodPal Copyright wurde nicht gefunden. Bitte verwende den originalen HTML-Code.",
        en: "The FoodPal copyright was not found. Please use the original HTML code.",
        fr: "Le copyright de FoodPal n'a pas été trouvé. Veuillez utiliser le code HTML original.",
        es: "No se ha encontrado el copyright de FoodPal. Por favor, utilice el código HTML original.",
        pt: "Os direitos de autor do FoodPal não foram encontrados. Por favor, utilize o código HTML original.",
        it: "Il copyright di FoodPal non è stato trovato. Utilizzare il codice HTML originale.",
        pl: "Nie znaleziono praw autorskich do FoodPal. Proszę używać oryginalnego kodu HTML."
    },
    arr_copyright_error2 = {
        de: 'Das FoodPal Copyright ist nicht korrekt. Bitte verwende den originalen "Powered by FoodPal" Text.',
        en: 'The FoodPal copyright is not correct. Please use the original "Powered by FoodPal" text.',
        fr: 'Le copyright FoodPal n\'est pas correct. Veuillez utiliser le texte original "Powered by FoodPal".',
        es: 'El copyright de FoodPal no es correcto. Utilice el texto original "Powered by FoodPal".',
        pt: 'Os direitos de autor do FoodPal não são correctos. Por favor, utilize o texto original "Powered by FoodPal".',
        it: 'Il copyright di FoodPal non è corretto. Utilizzare il testo originale "Powered by FoodPal".',
        pl: 'Prawa autorskie FoodPal nie są prawidłowe. Proszę użyć oryginalnego tekstu "Powered by FoodPal".'
    },
    arr_copyright_error3 = {
        de: "Das FoodPal Copyright ist nicht korrekt. Bitte verwende den originalen Link.",
        en: "The FoodPal copyright is not correct. Please use the original link.",
        fr: "Le copyright de FoodPal n'est pas correct. Veuillez utiliser le lien original.",
        es: "El copyright de FoodPal no es correcto. Por favor, utilice el enlace original.",
        pt: "Os direitos de autor do FoodPal não são correctos. Por favor, utilize a ligação original.",
        it: "Il copyright di FoodPal non è corretto. Utilizzare il link originale.",
        pl: "Prawa autorskie FoodPal nie są prawidłowe. Prosimy o korzystanie z oryginalnego linku."
    };
if (iniFrame())
    fp_code_inner.innerHTML = arr_iframe_detected[fp_attribute_lang],
    (fp_code_fragment = new DocumentFragment).appendChild(fp_code_inner),
    fp_code_wrapper.append(fp_code_fragment);
else if ("ok" != check_fp_copyright_link) {
    fp_code_inner.innerHTML = check_fp_copyright_link,
    (fp_code_fragment = new DocumentFragment).appendChild(fp_code_inner),
    fp_code_wrapper.append(fp_code_fragment)
} else {
    var fp_code_fragment,
        fp_host = "";
    "www.foodpal-app.com" != window.location.host && (fp_host = "https://code.foodpal-app.com"),
    fp_code_inner.innerHTML = ajax(fp_host + "/api/external/calculator-" + fp_attribute_calc + "-init/json/", "POST", "lang=" + fp_attribute_lang + "&unit=" + fp_attribute_unit + "&ws=" + window.btoa(window.location.href)),
    (fp_code_fragment = new DocumentFragment).appendChild(fp_code_inner),
    fp_code_wrapper.append(fp_code_fragment);
    var fp_box = document.getElementById("fp-box");
    fp_box.style.background = fp_attribute_bg_color,
    fp_box.style.color = fp_attribute_txt_color,
    document.getElementById("ul-fp-form-control").style.border = "1px solid " + fp_attribute_bg_color,
    document.getElementById("fp-calculator_gender-1").style.border = "5px solid " + fp_attribute_bg_color,
    document.getElementById("fp-calculator_gender-2").style.border = "5px solid " + fp_attribute_bg_color,
    "calorie-intake" == fp_attribute_calc && (document.getElementById("ul-fp-form-control-1").style.border = "1px solid " + fp_attribute_bg_color, document.getElementById("ul-fp-form-control-2").style.border = "1px solid " + fp_attribute_bg_color, document.getElementById("ul-fp-form-control-3").style.border = "1px solid " + fp_attribute_bg_color, document.getElementById("ul-fp-form-control-4").style.border = "1px solid " + fp_attribute_bg_color, document.getElementById("fp-calculator_job-1").style.border = "5px solid " + fp_attribute_bg_color, document.getElementById("fp-calculator_job-2").style.border = "5px solid " + fp_attribute_bg_color, document.getElementById("fp-calculator_job-3").style.border = "5px solid " + fp_attribute_bg_color, document.getElementById("fp-calculator_job-4").style.border = "5px solid " + fp_attribute_bg_color);
    for (var obj_fp_form_control = document.getElementsByClassName("input-fp-form-control"), i_fp_form_control = 0; i_fp_form_control < obj_fp_form_control.length; i_fp_form_control++)
        obj_fp_form_control[i_fp_form_control].style.background = fp_attribute_alt_bg_color,
        obj_fp_form_control[i_fp_form_control].style.color = fp_attribute_txt_color;
    for (var obj_fp_separator_line = document.getElementsByClassName("fp-separator-line"), i_fp_separator_line = 0; i_fp_separator_line < obj_fp_separator_line.length; i_fp_separator_line++)
        obj_fp_separator_line[i_fp_separator_line].style.background = fp_attribute_pri_color;
    for (var obj_fp_separator_icon = document.getElementsByClassName("fp-separator-icon"), i_fp_separator_icon = 0; i_fp_separator_icon < obj_fp_separator_icon.length; i_fp_separator_icon++)
        obj_fp_separator_icon[i_fp_separator_icon].style.background = fp_attribute_pri_color,
        obj_fp_separator_icon[i_fp_separator_icon].style.border = fp_attribute_pri_color,
        obj_fp_separator_icon[i_fp_separator_icon].style.color = fp_attribute_alt_txt_color;
    for (var obj_fp_headline = document.getElementsByClassName("fp-headline"), i_fp_headline = 0; i_fp_headline < obj_fp_headline.length; i_fp_headline++)
        obj_fp_headline[i_fp_headline].style.color = fp_attribute_txt_color;
    for (var obj_fp_subline = document.getElementsByClassName("fp-subline"), i_fp_subline = 0; i_fp_subline < obj_fp_subline.length; i_fp_subline++)
        obj_fp_subline[i_fp_subline].style.color = fp_attribute_txt_color;
    var obj_fp_btn_primary = document.getElementById("fp-calculator_click");
    obj_fp_btn_primary.style.background = fp_attribute_sec_color,
    obj_fp_btn_primary.style.border = "1px solid " + fp_attribute_sec_color,
    obj_fp_btn_primary.style.color = fp_attribute_alt_txt_color;
    var obj_fp_information_box = document.getElementById("fp-information-box");
    obj_fp_information_box.style.background = fp_attribute_pri_color,
    obj_fp_information_box.style.color = fp_attribute_alt_txt_color;
    var obj_fp_close_info = document.getElementById("fp-close-info");
    obj_fp_close_info.addEventListener("click", (function() {
        document.getElementById("fp-information-box").style.display = "none"
    }));
    var fp_obj1 = document.getElementsByClassName("fp-calculator_gender");
    fp_obj1[0].addEventListener("click", (function() {
        fp_obj1[0].setAttribute("active", 0),
        fp_obj1[1].setAttribute("active", 0),
        fp_obj1[0].setAttribute("active", 1),
        document.getElementById("ul-fp-form-control").setAttribute("class", "fp-form-control")
    })),
    fp_obj1[1].addEventListener("click", (function() {
        fp_obj1[0].setAttribute("active", 0),
        fp_obj1[1].setAttribute("active", 0),
        fp_obj1[1].setAttribute("active", 1),
        document.getElementById("ul-fp-form-control").setAttribute("class", "fp-form-control")
    })),
    "calorie-intake" == fp_attribute_calc && (document.getElementById("fp-calculator_job-1").addEventListener("click", (function() {
        document.getElementById("fp-calculator_job-1").setAttribute("active", 1),
        document.getElementById("fp-calculator_job-2").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-3").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-4").setAttribute("active", 0),
        document.getElementById("ul-fp-form-control-1").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-2").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-3").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-4").setAttribute("class", "fp-form-control")
    })), document.getElementById("fp-calculator_job-2").addEventListener("click", (function() {
        document.getElementById("fp-calculator_job-1").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-2").setAttribute("active", 1),
        document.getElementById("fp-calculator_job-3").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-4").setAttribute("active", 0),
        document.getElementById("ul-fp-form-control-1").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-2").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-3").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-4").setAttribute("class", "fp-form-control")
    })), document.getElementById("fp-calculator_job-3").addEventListener("click", (function() {
        document.getElementById("fp-calculator_job-1").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-2").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-3").setAttribute("active", 1),
        document.getElementById("fp-calculator_job-4").setAttribute("active", 0),
        document.getElementById("ul-fp-form-control-1").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-2").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-3").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-4").setAttribute("class", "fp-form-control")
    })), document.getElementById("fp-calculator_job-4").addEventListener("click", (function() {
        document.getElementById("fp-calculator_job-1").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-2").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-3").setAttribute("active", 0),
        document.getElementById("fp-calculator_job-4").setAttribute("active", 1),
        document.getElementById("ul-fp-form-control-1").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-2").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-3").setAttribute("class", "fp-form-control"),
        document.getElementById("ul-fp-form-control-4").setAttribute("class", "fp-form-control")
    })));
    var fp_link = document.querySelectorAll("#fp-code a");
    fp_link[0].style.color = fp_attribute_pri_color;
    var fp_input_gender = "",
        fp_input_age = "",
        fp_input_body_size = "",
        fp_input_body_weight = "",
        fp_input_job = "",
        fp_input_minutes = "",
        fp_input_activity = "";
    document.getElementById("fp-calculator_click").addEventListener("click", (function() {
        if (document.getElementById("fp-result").innerHTML = "", error = 0, 0 == document.querySelectorAll('.fp-calculator_gender[active="1"]').length)
            error++,
            document.getElementById("ul-fp-form-control").setAttribute("class", "fp-form-control fp-error");
        else {
            document.getElementById("ul-fp-form-control").setAttribute("class", "fp-form-control");
            var t = document.querySelectorAll('.fp-calculator_gender[active="1"]');
            fp_input_gender = t[0].getAttribute("data-attr")
        }
        if ("calorie-intake" == fp_attribute_calc)
            if (0 == document.querySelectorAll('.fp-calculator_job[active="1"]').length)
                error++,
                document.getElementById("ul-fp-form-control-1").setAttribute("class", "fp-form-control fp-error"),
                document.getElementById("ul-fp-form-control-2").setAttribute("class", "fp-form-control fp-error"),
                document.getElementById("ul-fp-form-control-3").setAttribute("class", "fp-form-control fp-error"),
                document.getElementById("ul-fp-form-control-4").setAttribute("class", "fp-form-control fp-error");
            else {
                document.getElementById("ul-fp-form-control-1").setAttribute("class", "fp-form-control"),
                document.getElementById("ul-fp-form-control-2").setAttribute("class", "fp-form-control"),
                document.getElementById("ul-fp-form-control-3").setAttribute("class", "fp-form-control"),
                document.getElementById("ul-fp-form-control-4").setAttribute("class", "fp-form-control");
                var e = document.querySelectorAll('.fp-calculator_job[active="1"]');
                fp_input_job = e[0].getAttribute("data-attr")
            }
        if (0 == Math.floor(document.getElementById("fp-age").value) ? (error++, document.getElementById("fp-age").setAttribute("class", "fp-form-control input-fp-form-control fp-error")) : (document.getElementById("fp-age").setAttribute("class", "fp-form-control input-fp-form-control"), fp_input_age = Math.floor(document.getElementById("fp-age").value)), 0 == Math.floor(document.getElementById("fp-body_size").value) ? (error++, document.getElementById("fp-body_size").setAttribute("class", "fp-form-control input-fp-form-control fp-error")) : (document.getElementById("fp-body_size").setAttribute("class", "fp-form-control input-fp-form-control"), fp_input_body_size = Math.floor(document.getElementById("fp-body_size").value)), document.getElementById("fp-body_weight") && (0 == Math.floor(document.getElementById("fp-body_weight").value) ? (error++, document.getElementById("fp-body_weight").setAttribute("class", "fp-form-control input-fp-form-control fp-error")) : (document.getElementById("fp-body_weight").setAttribute("class", "fp-form-control input-fp-form-control"), fp_input_body_weight = Math.floor(document.getElementById("fp-body_weight").value))), "calories-burned" == fp_attribute_calc && (0 == Math.floor(document.getElementById("fp-minutes").value) ? (error++, document.getElementById("fp-minutes").setAttribute("class", "fp-form-control input-fp-form-control fp-error")) : (document.getElementById("fp-minutes").setAttribute("class", "fp-form-control input-fp-form-control"), fp_input_minutes = Math.floor(document.getElementById("fp-minutes").value)), fp_input_activity = document.getElementById("fp-activity").value), error > 0)
            document.getElementById("fp-information-box").style.display = "block",
            document.getElementById("fp-information-box-inner").innerHTML = arr_missing_data[fp_attribute_lang],
            document.getElementById("fp-information-box").setAttribute("class", "fp-information-box fp-error");
        else {
            document.getElementById("fp-information-box").style.display = "none";
            var o = "";
            if ("www.foodpal-app.com" != window.location.host && (o = "https://code.foodpal-app.com"), "bmi" == fp_attribute_calc)
                var r = ajax(o + "/api/external/calculator-" + fp_attribute_calc + "/json/", "POST", "lang=" + fp_attribute_lang + "&unit=" + fp_attribute_unit + "&gender=" + fp_input_gender + "&age=" + fp_input_age + "&body_size=" + fp_input_body_size + "&body_weight=" + fp_input_body_weight + "&ws=" + window.btoa(window.location.href));
            else if ("ideal-weight" == fp_attribute_calc)
                r = ajax(o + "/api/external/calculator-" + fp_attribute_calc + "/json/", "POST", "lang=" + fp_attribute_lang + "&unit=" + fp_attribute_unit + "&gender=" + fp_input_gender + "&age=" + fp_input_age + "&body_size=" + fp_input_body_size + "&ws=" + window.btoa(window.location.href));
            else if ("calorie-intake" == fp_attribute_calc)
                r = ajax(o + "/api/external/calculator-" + fp_attribute_calc + "/json/", "POST", "lang=" + fp_attribute_lang + "&unit=" + fp_attribute_unit + "&gender=" + fp_input_gender + "&age=" + fp_input_age + "&body_size=" + fp_input_body_size + "&body_weight=" + fp_input_body_weight + "&job=" + fp_input_job + "&ws=" + window.btoa(window.location.href));
            else if ("calories-burned" == fp_attribute_calc)
                r = ajax(o + "/api/external/calculator-" + fp_attribute_calc + "/json/", "POST", "lang=" + fp_attribute_lang + "&unit=" + fp_attribute_unit + "&gender=" + fp_input_gender + "&age=" + fp_input_age + "&body_size=" + fp_input_body_size + "&body_weight=" + fp_input_body_weight + "&minutes=" + fp_input_minutes + "&activity=" + fp_input_activity + "&ws=" + window.btoa(window.location.href));
            void 0 !== r && (document.getElementById("fp-result").innerHTML = '<div class="fp-col-md-12"><h2 style="margin-bottom:20px;">- ' + arr_your_result[fp_attribute_lang] + ' -</h2></div><div id="fp-result-box" style="background:' + fp_attribute_pri_color + ";color:" + fp_attribute_txt_color + ';">' + r + "</div>")
        }
    }))
}
function iniFrame() {
    return !!window.frameElement
}
function ajax(t, e, o, r) {
    if (e = void 0 !== e ? e : "GET", r = void 0 !== r && r, window.XMLHttpRequest)
        var n = new XMLHttpRequest;
    else
        n = new ActiveXObject("Microsoft.XMLHTTP");
    return "POST" == e ? (n.open(e, t, r), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(o)) : (null != o && (t = t + "?" + o), n.open(e, t, r), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(null)), n.responseText
}
function check_fp_copyright() {
    var t = fp_code_wrapper.querySelectorAll(".fp-copyright");
    return "ok"
}

