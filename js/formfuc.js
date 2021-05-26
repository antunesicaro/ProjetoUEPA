function BotaoBuscar(){
    if(document.formBusca.txtBusca.value == '')
    {
        alert('Informe uma busca válida');
        return false;
    }else{
        //alert('Texto de busca: ' +document.formBusca.txtBusca.value);
        return true;
    }
}