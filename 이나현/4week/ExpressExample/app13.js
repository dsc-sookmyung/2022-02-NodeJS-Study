var express = require('express'),
    http = require('http'),
    path = require('path'),
    


var bodyParser = require('body-parser'),
    static = require('serve-static');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var multer = require('multer');
var cors = require('cors');
var fs = require('fs');

var app = express();





app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));

// 클라이언트에서 ajax로 요청했을 때 CORS(다중 서버 접속) 지원
app.use(cors());

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads');
    },
    filename: function(req, file, callback) {
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname, extension);
        callback(null, file.originalname + Date.now());
    }
});

var upload = multer({
    storage: storage,
    limits: {
        files: 10,
        fileSize: 1024 * 1024 * 1024
    }
});

var router = express.Router();

router.route('/process/photo').post(upload.array('photo',1) , (req,res) => {
  console.log('/process/photo 호출됨.');

  try{
    var files = req.files;

    console.log('-------업로드 된 첫번째 파일 정보-------');
    console.dir(req.files[0]);
    console.log('--------');

    var originalname;
    var filename ;
    var mimetype ;
    var size ;

    if(Array.isArray(files)) { 
    

      for(var i=0; i<files.length; i++){
        originalname = files[i].originalname;
        filename = files[i].filename;
        mimetype = files[i].mimetype;
        size =  files[i].size;
      }
    } 
      res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.write('<h1>파일 업로드 성공</h1>');
    res.write('<hr/>');
    res.write('<div><p>원본파일 이름 : '+originalname+' -> 저장 파일명 : '+filename+'</p></div>');
    res.write('<div><p>mimetype : '+mimetype+'</p></div>');
    res.write('<div><p>파일크기 : '+size+'</p></div>');
    res.write('<br><br><a href="/public/photo.html">photo.html이동하기</a>');
    res.end();
      



    

  } catch(err) {
    console.dir(err.stack);
  }
});


router.route('/process/product').get(function(req, res) {
    console.log('/process/product 라우팅 함수 호출됨');

    if (req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/login2.html');
    }
})

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 처리함');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if (req.session.user) {
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');


        res.redirect('/public/product.html');
    } else {
        req.session.user = {
            id: paramId,
            name: '소녀시대',
            authorized: true
        };

    }

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>로그인 성공.</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>ParamPassword : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/product.html'>상품 페이지로 돌아가기</a>");
    res.end();
});

router.route('/process/logout').get(function(req, res) {
    console.log('/process/logout is called');

    if (req.session.user) {
        console.log('로그아웃합니다.');

        req.session.destroy(function (err) {
            if (err) throw err;

            console.log('세션을 삭제하고 로그아웃되었습니다.');
            res.redirect('/public/login2.html');
        });
    } else {
        console.log('아직 로그인되어 있지 않습니다.');

        res.redirect('/public/login2.html');
    }
});

router.route('/process/users/:id').get(function(req, res) {
    console.log('/progress/users/:id 처리함');

    var paramId = req.params.id;

    console.log('/process/users와 토큰 %s를 이용해 처리함', paramId);

    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param Id : ' + paramId + '</p></div>');
    res.end();
});

router.route('/process/setUserCookie').get(function(req, res) {
    console.log('/process/setUserCookie 호출됨');

    res.cookie('user', {
        id: 'mike',
        name: '소녀시대',
        authorized: true
    });

    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie is called');

    res.send(req.cookies);
})



app.use('/', router);