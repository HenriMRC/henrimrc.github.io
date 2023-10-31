var language = navigator.language || navigator.browserLanguage;;

//alert(language);

if (language.includes('pt'))
{
    document.location.href = './pt';
}
else
{
    document.location.href = './en';
}