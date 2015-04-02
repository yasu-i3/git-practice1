<html>
<head lang = "ja">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta　charset = "UTF-8">
<title>受取フォーム</title>
</head>
<body>
<table>
  <tr>
    <td>名前 :</td><td><?php $name= $_POST['name'];  $name = htmlspecialchars($name); echo $name; ?></td>
  </tr>
  <tr>
    <td>メールアドレス :</td><td><?php $mail = $_POST["mail"]; $mail = htmlspecialchars($mail); echo $mail; ?></td>
  </tr>
  <tr>
    <td>コメント :</td><td><?php $comment = $_POST["comment"]; $comment = htmlspecialchars($comment); echo $comment; ?></td>
  </tr>
</table>

<?php

switch($_POST['type']) {
    
    case "question" :
        echo "質問のメッセージを承りました" ;
        break ;
        
    case "material" :
        echo "資料についてのメッセージ承りました";
        break ;
        
    case "company" :
        echo "会社についてのメッセージ承りました";
        break ;
        
    case "recruitment" :
        echo "採用についてのメッセージ承りました";
        break ;
        
    case "other" :
        echo "その他についてのメッセージ承りました";
        break ;
        
    default :
        echo "該当なし";
}
?>
</body>
</html>