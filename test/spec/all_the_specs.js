describe('a suite containing a single spec', function(){
  it('contains a single spec', function(){
    expect('true').toBeTruthy();
  });
});

describe('a suite with more than one spec', function(){
  it('contains a spec within', function(){
    expect('true').toBeTruthy();
  });
  
  describe('a nested describe with more than one spec', function(){
    it('has a first spec', function(){
      expect('true').toBeTruthy();
    });
    
    it('has a second spec', function(){
      expect('true').toBeTruthy();
    });
  });
});

describe('a suite that fails', function(){
  it('demonstrates failure', function(){
    expect({'foo': 'bar'}).toBe({'baz':'baq'});
  });
});

describe('a suite that is skipped', function() {
});