describe ('Temp conversion', function(){

  describe ('Deslisle to...', function(){

    it('Kelvin', function(){
      expect(convertTemp(-30, "De", "K")).toEqual(393);
    });

    it('Celcius', function(){
      expect(convertTemp(-30, "De", "C")).toEqual(120);
    });

    it('Fahrenhite', function(){
      expect(convertTemp(-30, "De", "F")).toEqual(120);
    });

  });

});
