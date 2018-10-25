
let SearchFunctionalityPage=function(){
    this.MainSearchBox=element.all(by.model('selectedPlace')).get(0);
    this.SecondSearchBox=$('#home-search-form-mobile>div>input');
    this.LogoOnSearchPage=$('.desktop');
    this.SearchLocation=$$('[ng-model="poi.title"]').get(0);
    this.MoveInDate=element.all(by.model('search.startDate')).get(0);
    this.MoveOutDate=element.all(by.model('search.endDate')).get(0);
    this.BedDropDown=$$('[ng-model="search.number_of_beds"]').first();
    
    this.BedSelector=function(bedNumbers){
        this.BedDropDown.$(`option[value='number:${bedNumbers}']`);
    }

    



}
module.exports=new SearchFunctionalityPage();