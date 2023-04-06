const calculateMarks = () => {
    // notes de première
    const hg_1 = document.getElementById('hg-1').value;
    const emc_1 = document.getElementById('emc-1').value;
    const ens_1 = document.getElementById('ens-1').value;
    const lva_1 = document.getElementById('lva-1').value;
    const lvb_1 = document.getElementById('lvb-1').value;
    const sp_1 = document.getElementById('sp1').value;
    const eaf_e = document.getElementById('eaf-e').value;
    const eaf_o = document.getElementById('eaf-o').value;

    // notes de terminale
    const hg_t = document.getElementById('hg-t').value;
    const emc_t = document.getElementById('emc-t').value;
    const ens_t = document.getElementById('ens-t').value;
    const lva_t = document.getElementById('lva-t').value;
    const lvb_t = document.getElementById('lvb-t').value;
    const eps_t = document.getElementById('eps-t').value;
    const opt1 = document.getElementById('opt1').value;
    const sp_2 = document.getElementById('sp2').value;
    const sp_3 = document.getElementById('sp3').value;
    const philo = document.getElementById('philo').value;
    const go = document.getElementById('go').value;

    // especificas
    let nota_esp_1 = 0;
    if (document.getElementById('nota-esp-1').value !== ""){
        nota_esp_1 = document.getElementById('nota-esp-1').value;
    }

    let coef_esp_1 = 0;
    if (document.getElementById('coef-esp-1').value !== ""){
        coef_esp_1 = document.getElementById('coef-esp-1').value;
    }

    let nota_esp_2 = 0;
    if (document.getElementById('nota-esp-2').value !== ""){
        nota_esp_2 = document.getElementById('nota-esp-2').value;
    }

    let coef_esp_2 = 0;
    if (document.getElementById('coef-esp-2').value !== ""){
        coef_esp_2 = document.getElementById('coef-esp-2').value;
    }

    let note_bac = 0;

    if(opt1 == ""){
        note_bac = (hg_1*3 + emc_1*1 + ens_1*3 + lva_1*3 + lvb_1*3 + sp_1*8 + eaf_e*5 + eaf_o*5 + hg_t*3 + emc_t*1 + ens_t*3 + lva_t*3 + lvb_t*3 + eps_t*6 + sp_2*16 + sp_3*16 + philo*8 + go*10)/100
    } else {
        note_bac = (hg_1*3 + emc_1*1 + ens_1*3 + lva_1*3 + lvb_1*3 + sp_1*8 + eaf_e*5 + eaf_o*5 + hg_t*3 + emc_t*1 + ens_t*3 + lva_t*3 + lvb_t*3 + eps_t*6 + opt1*2 + sp_2*16 + sp_3*16 + philo*8 + go*10)/102
    }

    let nota_acceso = 0;

    if(note_bac < 10){
        nota_acceso = 0;
    } else if(note_bac >= 10 && note_bac < 12){
        nota_acceso = 0.8372*note_bac-3.3714
    } else if (note_bac >= 12 && note_bac < 14){
        nota_acceso = 0.502*note_bac + 0.0659
    } else if (note_bac >= 14 && note_bac < 16){
        nota_acceso = 0.3716*note_bac + 2.479
    } else {
        nota_acceso = 0.394*note_bac + 2.123
    }

    let nota_admision = 0;

    if(note_bac > 10){
        nota_admision = nota_acceso + nota_esp_1*coef_esp_1 + nota_esp_2*coef_esp_2
    }

    return {
        note_bac,
        nota_acceso,
        nota_admision 
    }
    
};

const setMarks = (marks) => {
    document.getElementById('bac-span').textContent = marks.note_bac.toFixed(1);
    document.getElementById('acceso-span').textContent = marks.nota_acceso.toFixed(3);
    document.getElementById('admision-span').textContent = marks.nota_admision.toFixed(3);
}

const convalidate1 = () => {
    pce = document.getElementById('esp-1').value;
    if (pce === "other"){
        document.getElementById('nota-esp-1').value = "";
        document.getElementById('nota-esp-1').disabled = false;
    } else if (pce === "sp2-opt"){
        if (document.getElementById('sp2').value !== ""){
            document.getElementById('nota-esp-1').value = (document.getElementById('sp2').value / 2).toFixed(2);
            document.getElementById('nota-esp-1').disabled = true;
        } else {
            alert("Introduce una nota para spécialité 2");
            document.getElementById('esp-1').value = "other";
        }
    } else if (pce === "sp3-opt"){
        if (document.getElementById('sp3').value !== ""){
            document.getElementById('nota-esp-1').value = (document.getElementById('sp3').value / 2).toFixed(2);
            document.getElementById('nota-esp-1').disabled = true;
        } else {
            alert("Introduce una nota para spécialité 3");
            document.getElementById('esp-2').value = "other";
        }
    }
};

const convalidate2 = () => {
    pce = document.getElementById('esp-2').value;
    if (pce === "other"){
        document.getElementById('nota-esp-2').value = "";
        document.getElementById('nota-esp-2').disabled = false;
    } else if (pce === "sp2-opt"){
        if (document.getElementById('sp2').value !== ""){
            document.getElementById('nota-esp-2').value = (document.getElementById('sp2').value / 2).toFixed(2);
            document.getElementById('nota-esp-2').disabled = true;
        } else {
            alert("Introduce una nota para spécialité 2");
            document.getElementById('esp-1').value = "other";
        }
    } else if (pce === "sp3-opt"){
        if (document.getElementById('sp3').value !== ""){
            document.getElementById('nota-esp-2').value = (document.getElementById('sp3').value / 2).toFixed(2);
            document.getElementById('nota-esp-2').disabled = true;
        } else {
            alert("Introduce una nota para spécialité 3");
            document.getElementById('esp-2').value = "other";
        }
    } 
};

const calc = () => {

    // notes de première
    const hg_1 = document.getElementById('hg-1').value;
    const emc_1 = document.getElementById('emc-1').value;
    const ens_1 = document.getElementById('ens-1').value;
    const lva_1 = document.getElementById('lva-1').value;
    const lvb_1 = document.getElementById('lvb-1').value;
    const sp_1 = document.getElementById('sp1').value;
    const eaf_e = document.getElementById('eaf-e').value;
    const eaf_o = document.getElementById('eaf-o').value;

    // notes de terminale
    const hg_t = document.getElementById('hg-t').value;
    const emc_t = document.getElementById('emc-t').value;
    const ens_t = document.getElementById('ens-t').value;
    const lva_t = document.getElementById('lva-t').value;
    const lvb_t = document.getElementById('lvb-t').value;
    const eps_t = document.getElementById('eps-t').value;
    const sp_2 = document.getElementById('sp2').value;
    const sp_3 = document.getElementById('sp3').value;
    const philo = document.getElementById('philo').value;
    const go = document.getElementById('go').value;

    if(hg_1 !== "" && emc_1 !== "" && ens_1 !== "" && lva_1 != "" && lvb_1 !== "" && sp_1 !== "" && eaf_e !== "" && eaf_o !== "" && hg_t !== "" && emc_t !== "" && ens_t !== "" && lva_t !== "" && lvb_t !== "" && eps_t !== "" && sp_2 !== "" && sp_3 !== "" && philo !== "" && go !== ""){
        setMarks(calculateMarks())
    } else {
        alert("Vous devez compléter toutes les notes sauf OPTION1 et ESPECÍFICAS");
    }
};