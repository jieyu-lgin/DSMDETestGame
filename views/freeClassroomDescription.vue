<template lang="html">

  <div class="">
      <navbar :series="series"></navbar>
      <div class="">
        <el-row  type="flex" class="row-bg" justify="center">
          <el-col :span="20" >
            <div style="width:100%;">
              <div class=" grid-content bg-purple">
                <div class="detail">
                  <el-card :body-style="{ padding: '0px'}">
                    <img :src="imageUrl" class="image">
                    <div style="" v-show="showPlayer">
                      <aplayer autoplay :repeat="repeat"
                        :music="{
                          title: name,
                          artist: ' ',
                          src: musicUrl,
                          pic: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg'
                        }"
                      />
                    </div>
                    <div style="padding: 10px;">
                      <p class="site-title">{{ name }}</p>
                      <time class="site-time">{{'第二生命形态学研究室 王科敏'}}</time>
                      </br>
                      <time class="site-time">{{ pushedTime }}</time>
                      </br>
                      <p style="font-size:14px; line-height:18px; text-indent:2em" v-html="description"></p>
                    </div>
                  </el-card>
                </div>
                <footer1 :series="series"></footer1>
              </div>
            </div>

          </el-col>
        </el-row>
      </div>

  </div>
</template>

<script>
import { fetchUserInfo } from '@/api/login'
import Navbar from './components/Navbar'
import Aplayer from 'vue-aplayer'
// import GLOBAL from '@/api/global'
import Footer1 from './components/Footer1'

export default {
  data() {
    var imgUrl = 'https://static2.tianqionggongcheng.com/freeClassroom-1.jpg'
    return {
      imageUrl: imgUrl,

      showPage: false,
      description: '',
      lesson: {},
      question: [],
      pushId: this.$router.currentRoute.query.pushId || -1,
      amount: 0,
      loading: false,
      prepare: false,
      hasTested: false,
      orderLink: '',
      isSuccess: false,
      isAnswerComplete: true,
      reListion: false,
      showMessageDlg: false,
      showMessageDlg2: false,
      currentOrderId: this.$router.currentRoute.query.orderId || -1,
      answer: [],
      currentAnswer: '非常想',
      questionIndex: 0,
      showPlayer: false,
      name: '免费系列',
      musicUrl: 'https://static2.tianqionggongcheng.com/freeLesson20.m3u8',
      series: '公益课堂',
      showLoginButton: true,
      showCreatOrderButton: true,
      pushedTime: '',
      leftCount: -1,
      // 增加判断用户是否为合作企业用户
      userInfo: {
        registerSource: '',
        registerSourceRelId: ''
      },
      agencyId: this.$store.getters.agencyId || 0,
      openId: this.$router.currentRoute.query.openId || '',
      currentOpenId: '',
      isWrongOpenId: false,
      timer: null,
      repeat: 'repeat-one',
      list: [
        {
          name: '沟通系列——你说对了吗？（一）',
          description: '<p>这是一个关于风和草的故事。一只虫子爬到小草的叶子上产卵了，小草想请风把虫卵吹掉。于是，小草对风说，“你能帮我把身上的虫卵吹掉吗？”风说，“可以呀。”于是，风使出了全身的力气呼呼地吹，心想这样一定可以帮小草把身上的虫卵吹掉。结果，小草被风吹断了。痛苦的小草生气地说，“你就不会轻点儿呀？胳膊都让你吹折了。”风委屈地说，“不是你让我吹的吗？还嫌我吹得不好。你也没告诉我要用多大的劲儿吹呀？”</p><p>在这个故事中，小草为什么被风吹断了呢？因为它没有表达清楚“它身上哪个部位有虫卵，有什么样的虫卵，大概需要多大的劲儿才能吹掉”。我们从第二生命形态学出发，把小草的这种沟通方式称之为“省略式沟通”。</p><p>在人与人之间的沟通中，我们对这种“省略式沟通”是不是似曾相识呢？妻子正在做饭呢，对丈夫说，“快去帮我买一把青菜回来”。于是，丈夫出门去菜场把青菜买回来了。结果妻子一看丈夫买的青菜，就忍不住说，“你这买的什么呀？这么老的青菜，让我怎么做汤呀？买个菜这么点事你都做不好。”丈夫也生气了，“你这人怎么这样？不是你让我买的吗？你也没告诉我买什么样的青菜做什么呀？”因为这种省略式沟通的使用，不仅我们原本想实现的目的无法实现，而且沟通双方还有一肚子的委屈和愤怒。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 0,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson1.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（二）',
          description: '<p>这是一段风和草之间的对话。</p><p>一只虫子爬到小草的叶子上产卵了，小草想请风把虫卵吹掉。</p><p>草对风说：你能帮我把身上的虫卵吹掉吗？ </p><p>风说：没看见我忙着呢吗？</p><p>草对风说：你能帮我把身上的虫卵吹掉吗？ </p><p>风说：你没长手啊？</p><p>草对风说：你能帮我把身上的虫卵吹掉吗？ </p><p>风说：你就不能自己弄吗？</p><p>草对风说：你能帮我把身上的虫卵吹掉吗？ </p><p>风说：你就不能消停会儿吗？</p><p>听到这一组对话，您是什么感觉呢？如果我没猜错的话，您一定或多或少会觉得这种对话好笑，甚至可笑。我们从第二生命形态学出发，把风所使用的这种沟通方式称之为“反问式沟通”。</p><p>这种“反问式沟通”在人与人之间的沟通中是不是存在呢？比如，</p><p>孩子对妈妈说：妈妈，陪我玩。</p><p>妈妈：这孩子，怎么那么不懂事啊？没看见妈妈忙着呢吗？</p><p>孩子对妈妈说：妈妈，帮我拿一下。</p><p>妈妈：这孩子，你没长手啊？自己拿。</p><p>孩子对妈妈说：妈妈，帮我把这个弄好。</p><p>妈妈：这孩子，你就不能自己弄啊？</p><p>孩子对妈妈说：妈妈来，妈妈，过来。</p><p>妈妈：这孩子，你就不能消停会儿吗？</p><p>我们为什么会使用这种反问式沟通呢？也许我们心情不好，也许我们手头上正忙着某件事情，也许我们觉得孩子做得不对，也许我们更希望孩子能自己动手完成这件事情……可是，使用这种反问式沟通的结果呢？我们不仅不能很好地表达自己原本的目的和想法，当然也就不能很好地实现自己的目的和想法了，而且，我们还会有一肚子的不满意和抱怨“这孩子，怎么那么不懂事？”而孩子呢，当然只剩下一肚子的委屈了。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 1,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson2.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（三）',
          description: '<p>一只虫子爬到小草的叶子上产卵了，小草想请风把虫卵吹掉，于是，小草对风说，“你能帮……”“你住嘴！”小草刚一张口，风就把小草的话给堵了回去，并且风还说，“我不想听你说，从你的嘴里说不出好话来！”小草委屈极了，自言自语道，“哼！你有什么了不起？你不是不想听我说吗？以后你也别想让我听你说。”</p><p>在这个故事中，小草为什么会委屈呢？因为它有话想对风说，但是还没等它把自己的想法表达完，风就打断了它。我们从第二生命形态学出发，把风所使用的这种沟通方式称之为“阻断式沟通”。</p><p>在人与人之间的沟通中，这种阻断式沟通是不是存在呢？比如，孩子放学回家，想跟妈妈说一件事，但是，妈妈想让孩子快点儿写作业，所以，孩子刚一张口，妈妈就说，“别磨蹭了，快写作业去”。孩子十分不情愿地写作业去了。</p><p>又比如，孩子干了一件错事，想跟妈妈解释呢，妈妈不想听，觉得孩子在找借口。于是，还没等孩子说完呢，妈妈就打断了孩子，“行了，又想找借口，是不是？就你那点小心思，你妈一清二楚。”孩子委屈极了，心想，“妈妈怎么这样啊，都不听我把话说完，一点儿都不理解我。”</p><p>我们为什么会对孩子使用阻断式沟通呢？也许我们认为孩子不应该在这个时候说这些话，也许我们更想让孩子去干我们希望他干的事情，也许我们觉得孩子要说的话我们都知道，也许只是因为我们自己心情不好，不想听孩子说……可是，使用这种阻断式沟通的结果呢？我们不仅无法更好地了解孩子的想法，当然也就无法更好地帮助孩子了解、认知和应对他所生存的世界了，而且，我们还把孩子想和我们沟通的意愿给堵了回去。而我们给孩子留下的呢，恐怕只是一肚子的委屈和不情愿了吧。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 2,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson3.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（四）',
          description: '<p>一个花盆里种了一棵灌木，灌木的周围长出了几棵小草。连下了几天雨，小草长高了不少。这天，好不容易太阳出来了，小草想好好晒晒太阳。可是，它一抬头，却发现比自己高大的灌木挡住了阳光，自己根本晒不着太阳。小草很不高兴，越想越觉得不公平。于是，小草对灌木说，“你凭什么挡着我需要的阳光？”灌木恼了，“我就挡怎么了？你以为就你需要呀？一边站着去！”小草一听，受不了了，“你以为你是谁呀？凭什么你就得站中间，我就得站边上啊？”灌木正为小草抢了花盆里土壤中的水分而耿耿于怀呢，所以，张口就说，“谁让你抢了我需要的水分呢？”小草也不甘示弱，“我就抢，怎么了？”灌木怒了，“那我就挡着你需要的阳光，怎么了？有本事你挡我呀！”就这样，小草和灌木你指责我，我指责你，你否定我，我否定你，谁也不让着谁，就这样在生气、愤怒和对抗中度过了本应是极为美好的一天。</p><p>为什么本应是极为美好的一天，结果却只能在生气、愤怒和对抗中度过呢？因为灌木和小草之间的沟通出现了问题。我们从第二生命形态学出发，把小草和灌木之间的这种沟通方式称之为对撞式沟通。</p><p>这种对撞式沟通在人与人之间的沟通中是不是存在呢？夫妻俩约好了一起出去吃饭，可是还没想好去哪儿呢。丈夫说，“我们去A餐厅吧。”妻子不想去A餐厅，于是，对丈夫说，“A餐厅不好，我不想去，还是去B餐厅吧。”可是，丈夫就想去A餐厅，所以，张口就说，“B餐厅也不怎么样，还是去A餐厅吧”。妻子不乐意了，“A餐厅有什么好的，那么贵，我不去了。”丈夫也不高兴，“你就知道嫌贵。算了，不去就不去了。”最终，两人都不同意对方的想法，本是要一起出去吃顿饭，散散心呢，结果却是以生气和委屈来收的尾。</p><p>因为对撞式沟通的使用，不仅沟通双方的目的无法实现，而且，除了收获一肚子的愤怒、烦恼和委屈，别的什么也得不到。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 3,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson4.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（五）',
          description: '<p>夜晚，教室的窗户上趴着一只树蛙，树蛙的旁边还有一只蛾子。树蛙虎视眈眈地看着蛾子，惹得蛾子很生气。所以，无论树蛙说什么，蛾子都只是简单应答。到最后，蛾子实在不想再跟树蛙说什么了，因为它觉得，说吧又说不清楚，说了反而有可能让树蛙喋喋不休，所以它干脆就不说了。于是，蛾子对树蛙说，“行行行，你说什么就是什么吧”。说了这句话之后，蛾子再也不跟树蛙沟通了。可是，它对树蛙越来越反感，而树蛙呢，因为感受到了蛾子对它的反感和厌弃，也变得越来越焦躁。最终，树蛙实在受不了了，后腿一蹬，前腿一够，舌头一卷，就把蛾子一口吃进了肚子里。</p><p>在这个故事里，蛾子为什么被树蛙吃进了肚子里呢？因为在本应该沟通的空间，它没有与树蛙沟通，而是采用了不沟通的方式，以实现自己的目的。我们从第二生命形态学出发，把蛾子所使用的这种沟通方式称之为冷暴力式沟通。</p><p>在人与人之间的沟通中，这种形式的冷暴力式沟通是不是存在呢？比如，丈夫因为单位有事回来晚了，这样，本来丈夫和妻子约好的下班后一起去给孩子外婆过生日的承诺就没法实现了。妻子不高兴，絮絮叨叨絮絮叨叨地说个没完，丈夫想跟妻子解释，可是他又觉得，说吧又说不清楚，说了还可能让妻子更加地喋喋不休，于是丈夫干脆就不解释了，对妻子说，“行，你说的都对，你说什么就是什么吧。”说完这句话，丈夫就开始埋头干自己的事情了。可是，丈夫对妻子越来越反感，觉得妻子没事找事，妻子呢，因为感受到了丈夫的反感，在家里也越来越焦躁。最终，夫妻俩谁看谁都不是太顺眼。</p><p>因为这种冷暴力式沟通方式的使用，使用方对对方会越来越反感，甚至最终会形成厌弃，而被使用方呢，因为感受到了对方的反感和厌弃，最终也会变得越来越焦躁。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 4,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson5.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（六）',
          description: '<p>天要下雨了，一群蚂蚁搬着一大块食物急急忙忙往家赶。可是，走着走着，前面一颗小草挡住了蚂蚁回家的路。蚂蚁必须从这颗小草的叶子下面穿过去，否则，它们就得绕很远的路才能回家。可是，搬着一大块食物绕远很不方便，而且，如果赶上下雨就不好了。怎么办呢？蚂蚁们商量了一会儿，最终一致决定派一个代表去跟小草说。于是，一只蚂蚁代表跟小草说：“小草姐姐，天要下雨了，我们搬着东西绕道走可能会赶上下雨，能不能从你的叶子下面穿过去呀？”小草说：“我正好缺肥料呢，把你们搬的食物放在我的根部当肥料，我就让你们过去。”为了不淋雨，无奈之下，蚂蚁们只好把食物放在了小草的根部，然后急急忙忙地回家了。</p><p>第二天，不知是谁把一块土放在了小草的身上，压得小草喘不过气来。小草远远地看见蚂蚁们就喊：“蚂蚁兄弟，请你们帮个忙，好吗？你们能帮我把身上的土搬走吗？”蚂蚁们还为昨天的事生气呢，蚂蚁代表张口就说：“我们正好需要一片叶子，要我们帮你搬也可以，你得让我们把土压着的这片叶子一起搬走！”无奈之下，小草也只好同意了。</p><p>在这个故事中，小草和蚂蚁都是先要使别人满足自己的目的，然后才肯满足对方的目的，我们从第二生命形态学出发，把小草和蚂蚁所使用的这种沟通方式称之为交易式沟通。</p><p>在亲子之间的沟通中，这种交易式沟通是不是存在呢？比如，孩子想要妈妈给他买一双鞋，可是妈妈跟孩子说：“你下次语文考试考100分，妈妈就给你买。”孩子想让爸爸陪他去吃自助餐，爸爸说：“你期中考试考了全班第一，爸爸就带你去。”可是，这样沟通的结果呢？到后来，当我们想让孩子把洗衣机里的衣服晾起来时，孩子可能会说：“那我今天晚上就不刷碗了啊”。当我们想让孩子去楼下超市买包盐的时候，孩子可能就会说：“那您得同意我给自己买瓶饮料”。原来，孩子也会跟我们交易了。</p><p>如果父母经常对孩子使用交易式沟通，那么，当父母们想要实现自己的目的的时候，孩子也会跟我们交易，也会要求我们先满足他的目的了。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 5,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson6.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（七）',
          description: '<p>学院的小池塘里养着两种鱼，一种是锦鲤，另一种是鲫鱼。锦鲤体格健美，色彩艳丽，花纹多变，十分漂亮。锦鲤自己也认为自己很美。一天，一条锦鲤对鲫鱼说：“你身上的颜色太单调了，真难看！跟你这么难看的鱼养在一个池塘里，真丢人！出去别说你认识我啊！”听了锦鲤的话，鲫鱼不服气，心里很不舒服，张口就说：“呵，不就是破花纹嘛，有什么了不起？我还嫌扎眼呢！”</p><p>在这个故事中，鲫鱼为什么会感觉心里不舒服呢？因为锦鲤用语言贬低了它。我们从第二生命形态学出发，把锦鲤所使用的这种沟通方式称之为贬低式沟通。</p><p>这种贬低式沟通在人与人之间的沟通中是不是存在呢？比如，妈妈可能会对孩子说：“怎么这么笨啊？这点小事都不会！”“看你笨手笨脚的，叫你烧香你就打菩萨！”“你就这么学吧你，早晚收垃圾去!”“你就不好好学吧，长大了要饭去！”“你这破字，跟蜘蛛爬似的！”</p><p>我们为什么会使用这种贬低式沟通呢？很多时候，都是因为我们爱孩子，想让孩子在这些事情上做得更好。可是这样沟通的结果呢？我们不能把自己“想让孩子好”的意思表达清楚，孩子当然也无法清晰地知道我们其实是想让他好，因为孩子不能明确地知道我们想要表达的意思，孩子当然也就无法真的像我们希望的那样把这些事情做好了。而我们收获了什么呢？恐怕除了孩子的委屈和对抗，别的我们什么也没得到吧。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 6,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson7.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（八）',
          description: '<p>乌鸦妈妈孵出了一窝小乌鸦，看着小乌鸦们一天天长大，乌鸦妈妈心里开心极了。而且，乌鸦妈妈越看自己的孩子，越觉得它们漂亮，心想，“我的孩子一定是世界上最美丽的鸟！我一定要好好保护它们，不让它们受到任何伤害！”</p><p>所以，当小乌鸦们长大了，需要离开妈妈的怀抱，自己展翅飞翔的时候，乌鸦妈妈十分不放心，一会儿担心别的动物会伤害小乌鸦，一会儿又担心人类会伤害小乌鸦。于是，乌鸦妈妈一遍一遍地叮嘱小乌鸦们：“孩子们，这个世界上没有好人，你们出去千万要提防着别的动物啊！”“孩子们，人类可坏了，我们的生存环境都让他们给破坏了，看见人类你们可得小心啊！”“对了，孩子们，妈妈差点忘了，人类还有各种捕鸟的工具呢，你们一定要记住妈妈的话，千万要小心啊”……</p><p>小乌鸦们离开妈妈的怀抱，开始在天空中练习飞翔了。它们谨记妈妈的教诲，看见别的动物，心想“它们不会害我吧？我得离它们远点儿。”看见人类，它们又想，“可恶的人类，又想捕我们，是不是？我得离得远点。”所以，每次出去，小乌鸦们都特别累，一点儿都不开心。到最后，小乌鸦们越来越不愿意出去了，因为它们觉得这个世界简直就没法生存了。</p><p>在这个故事中，小乌鸦们本应该展翅在天空中自由地飞翔，为什么到后来却不愿意出去了呢？因为乌鸦妈妈对它们说了太多负面的东西。我们从第二生命形态学出发，把乌鸦妈妈所使用的这种沟通方式称之为晦暗式沟通。</p><p>在人与人之间的沟通中，这种晦暗式沟通是不是存在呢？比如，父母可能会跟孩子说，“哎，现在的世界太乱了，吃顿饭都有可能被杀，简直没有天理！”“哎，现在的幼儿园老师，又是喂孩子药，又是打孩子的，真不像话！”“人类真是，把空气污染成这样，还让不让人出门了！” </p><p>使用这种晦暗式沟通的结果呢？我们的孩子也可能像故事中的小乌鸦一样，一进入社会，与任何事情碰触都感觉累，对什么都抱怨，直至最终再也不愿意接触这个社会了。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 7,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson8.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（九）',
          description: '<p>学院的假山上长了一颗小草，这棵小草的根部又长出来了另一棵更小的小草。一天，这颗新长出来的小草被虫咬了。它很疼，但是它又不知道怎么办。于是，小草对妈妈说：“妈妈，我被虫咬了。”小草妈妈正在努力地汲取土壤中的水分呢，所以，它扭头就对小草说：“你别理它。” </p><p>又过了几天，小草又被虫子咬了，而且这一次，虫子一连咬了好几口。小草疼痛难耐，又对妈妈说：“妈妈，虫子又咬我了。”小草妈妈说：“我不是跟你说了别理它吗？”小草委屈了，因为它真的不知道什么是不理它，为什么不理它，怎么才能不理它呢。</p><p>在这个故事中，小草为什么会两次被虫咬呢？因为小草妈妈没有把一件事情的原因、过程和结果教给小草，跟小草说得清清楚楚。在小草看来，妈妈所说的那句话跟没说一样。我们从第二生命形态学出发，把小草妈妈所使用的这种沟通方式称之为无作为式沟通。</p><p>这种沟通方式在人与人之间的沟通中是不是存在呢？比如，孩子放学回来跟妈妈说：“妈妈，我们班同学欺负我了”。有的妈妈可能张口就对孩子说：“以后你别理他。”还有的妈妈可能会对孩子说：“他怎么不欺负别的同学呀？”可是，不管是哪一种方式，孩子都不可能知道什么是欺负，为什么会被欺负，怎么才能不被欺负。</p><p>我们为什么会用这种方式跟孩子沟通呢？也许我们手头上有自己的事情要忙，也许我们觉得孩子所说的事情不是什么大事，用不着大惊小怪，也许当时我们的情绪本来也不是太好。可是，使用这种无作为式沟通的结果呢？孩子没法清楚地明白我们所要表达的意思，当然也就无法知道如何进行正确的行为表现了。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 8,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson9.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '沟通系列——你说对了吗？（十）',
          description: '<p>一座山上长了一片蒲公英。蒲公英贪婪地吸收着阳光和雨露，一天天长大。其中有一棵蒲公英因为选择的位置不错，所以它长得很快，很快就结出了种子。看着自己的种子逐渐成熟，蒲公英很庆幸自己选择了这么好的生存位置。它想，“如果我的孩子们世世代代都能在这么好的地方生存，该多好啊！”想着想着，它仿佛看见了自己子孙满堂，漫山遍野都是自己的孩子们，而且儿孙们都为自己的祖先选择了这么好的生存环境而骄傲。蒲公英越想越觉得美妙，越想越觉得自己的孩子们就应该在这里生存。</p><p>于是，等它的种子成熟的时候，它就跟它的孩子们说，“孩子们，妈妈已经为你们选好了生存环境了，以后咱们家世世代代就在这里生存吧！”所以，当风吹过来的时候，它的孩子们并没有像其它的蒲公英的种子那样随风而去，努力地为自己寻找更好地适合自己生存的位置。结果，到第二年的时候，别的蒲公英的种子到处生根发芽，而它的种子呢，要么还在妈妈的怀抱里没走出来呢，要么就是围绕在妈妈的身边，争着抢着有限的阳光和雨露。</p><p>为什么在这个故事中，这棵蒲公英的种子不能像其它的蒲公英的种子那样为自己选择适合自己的生存环境呢？因为蒲公英妈妈告诉它们，妈妈已经为它们选好了，它们不用再去自己选择了。我们从第二生命形态学出发，把蒲公英妈妈所使用的这种沟通方式称之为埋葬式沟通。</p><p>在人与人之间的沟通中也是一样。如果我们对我们的孩子过多地使用了这种埋葬式沟通，比如，“你考上大学就行了，工作到时候你爸会给你安排的”“你怎么学都行，到时候你妈会给你找一所学校”“你只管学习就行了，其它的有你妈呢”“什么都别管，有爸爸呢”，我们的孩子为自己选择适合自己的生存位置的能力就被我们亲手埋葬了，孩子的一生也不知道有没有真正的快乐可言了。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 9,
          pushedTime: '2019-02-26',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom-1.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson10.m3u8"}',
          series: 'free_course',
          type: 'communication'
        },
        {
          name: '教子有方系列之一：别把任性当个性',
          description: '<p>几个家庭带着孩子聚在一起的时候，我们可能见到过有的孩子有这样的表现：自己想干什么就干什么，完全不顾及别人。比如，在场地中到处东跑西窜，大声喊叫，一旦自己的想法不能得到满足，比如，别人叫他别跑别叫，他就开始又哭又闹，甚至不管地上是水是泥，都能躺在地上打滚。通常，我们会把这样的表现说成是孩子“任性”的表现。</p><p>对于孩子的这些表现，有些父母可能会认为这是孩子的“个性”，有些父母可能还会说，我们家很民主，我们想让孩子自由发展，绝不抑制孩子的个性成长。但是，我们要提醒家长们的是，在孩子的成长过程中，千万别把“任性”当“个性”。</p><p>因为孩子之所以会出现“任性”的表现，由着自己的性子，想干什么就干什么，一般是因为孩子在成长过程中，对自己的关注过多，对其他人和外部环境的关注缺失所造成的。因为孩子对自己的关注过多，对其他人和外部环境的关注缺失，所以，在他想干什么的时候，别人一旦干涉他，或者别人一旦不认同他，他的情绪就会波动，甚至失去控制，并因此出现大吼大叫、大哭大闹、跺脚、摔东西，甚至躺在地上打滚等夸张的语言和肢体行为表现。</p><p>如果父母们因为把“任性”当成是“个性”，而没有对这个问题进行合理地处理，只是任其发展；或者是因为把“任性”当成是“个性”，而使用某种方式对孩子的这种表现进行鼓励的话，那么，随着孩子的成长，这种“任性”的表现也就会愈演愈烈。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 10,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson11.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之二：孩子的“笨”是教出来的',
          description: '<p>在我们实际接触家长和孩子的过程中，我们可能听到过有些家长这样说自己的孩子，“我怎么生了你这么笨的孩子，这么教都不会！”“你怎么这么笨啊，教了那么多遍都不会！”每当这个时候，孩子总是呆在一旁，低着头，满肚子的委屈却说不出来。</p><p>孩子真的是“笨”吗？真的“笨”到教都教不会吗？我们要提醒家长们的是，绝大多数孩子的“笨”都是教出来的。为什么这么说呢？家长们，我们要知道，每一个孩子的思维特点不一样，因此每一个孩子喜欢的东西也不尽相同。对于自己喜欢的东西，孩子学起来可能会快一些，而对于自己不喜欢或不熟悉的东西，孩子学起来则有可能会慢一些。</p><p>不仅如此，每一个孩子的视觉、听觉、触觉使用习惯性也都不一样，所以，每一个孩子喜欢的学习方式和被教授方式也不尽相同，有的孩子喜欢用视肢通道来学习，对于这一类的孩子，在教他们的时候，如果能配上动作演示，他们学起来会更快；而还有一些孩子呢，喜欢用语听通道来学习，在教这一类的孩子的时候，如果能用语言解释清楚的话，孩子接受起来可能会更容易。</p><p>所以，作为家长，在我们教孩子的时候，一定要根据孩子的实际情况和所教授事物的实际情况，选择最适合自己的孩子的教授方式，否则，如果方式不当，我们可能会把一个原本很聪明的孩子教成一个“笨”孩子，而我们自己在不知道本质的情况下，只能无奈地数落孩子，“你怎么这么笨啊！”</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 11,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson12.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之三：拿什么拯救“叛逆”的孩子',
          description: '<p>随着孩子的成长，很多父母都有这样的感觉，自己的孩子小的时候很懂事，很听话，可是，上初中以后就不一样了。有的孩子有了自己的小秘密，有的孩子脾气越来越不好，有的孩子开始顶嘴了，有的孩子你让他干什么他偏不干什么，你让他向东，他偏向西，整个一副“叛逆”的形象。这个时候，有的父母开始头疼了，有的父母开始焦虑了，孩子怎么了？</p><p>其实这是孩子成长过程中正常的行为表现，第二生命形态学把这种行为表现称之为孩子“第二次逆反期”的外在表现。任何一个思维正常的孩子，在其成长过程中，都会经历“第二次逆反期”，并在这个时间段呈现出与之前不同的外在表现，只不过每个孩子的表现明显程度不一样，有的孩子较为明显，有的孩子很明显。而这些行为表现的出现，标志着孩子的成长进入了一个新的阶段。</p><p>在这个新的成长阶段，因为孩子的表现与此前不一样了，有的父母就开始不适应了。所以，面对这个新的成长阶段，其实最应该调整和适应的是父母，而绝非孩子。作为父母，面对这个新的培育阶段，面对新的培育责任和任务，我们需要更多的耐心和智慧，用合理的培育方法对孩子进行正确的引导。父母的耐心和智慧才能真正地拯救“叛逆”的孩子，而头疼和焦虑只会增加亲子沟通障碍，最终导致孩子的成长过程中出现更多的问题。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 12,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson13.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之四：千万别做爱抱怨的妈妈',
          description: '<p>早上，当我们几次三番地叫孩子起床，孩子还是美美地睡着的时候，我们会抱怨吗？周末，当孩子答应我们了白天要把作业写完，结果晚上我们回来的时候，孩子的作业还是没有写完，这个时候，我们会抱怨吗？要睡觉了，任凭我们怎么说，孩子不刷牙不洗脸就钻进了被窝，这时候，我们会抱怨吗？</p><p>也许有的妈妈说“会”，也许有的妈妈说“不会”，也许有的妈妈说，“一般不会，有时候会”……如果您的回答是肯定的，那我们可要提醒您，在孩子的成长过程中，千万别做爱抱怨的妈妈！</p><p>因为当我们在抱怨的时候，其实我们并没有与孩子沟通，我们只不过是把孩子当成沟通的恃物，自己跟自己沟通罢了。因为我们其实并没有与孩子沟通，这一类沟通从本质上来说属于“无效沟通”。在孩子的成长过程中，如果这一类“无效沟通”过多的话，那么，等到孩子逐渐长大以后，孩子慢慢地也就不愿意主动与我们沟通了。不仅如此，如果妈妈对孩子使用的这一类沟通过多的话，当我们真的有事情想和孩子沟通的时候，孩子可能已经不愿意和我们沟通了，也许听见我们说话，他的眉头就开始皱了起来；也许我们还没张口呢，他就已经不耐烦了……</p><p>所以，为了我们终将老去的时候，能够挽着儿子的胳膊，倚着他宽厚的肩膀；为了女儿能够成为妈妈的贴心小棉袄，妈妈们，我们千万不要成为爱抱怨的妈妈！</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 13,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson14.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之五：别“冤枉”了我们的孩子',
          description: '<p>孩子考试作弊了；</p><p>孩子考试全班排名30名，却告诉妈妈自己这次考试排名20名；</p><p>老师让孩子把卷子给家长签名，结果孩子因为自己考得不好，所以就没给家长签名，弄得老师把家长说了一顿……</p><p>当我们遇到这些问题的时候，我们通常会怎么做呢？有的家长会说，“考试作弊，本身就不对，当然要批评教育了” ；有的家长会说，“小小年纪就敢骗家长，那还了得”；有的家长会说，“老师让完成的事情不完成，肯定是要教育一番的”……</p><p>但是，家长们，我们可知道，孩子这些行为的背后，其实是一颗“关注父母，渴望取得好成绩的心”啊。孩子考试作弊，其实是因为孩子还想考好，只不过他没有更好的方法，否则，他完全可以破罐子破摔，爱考成什么样考成什么样；孩子考了30名，却告诉妈妈自己考了20名，其实是因为孩子知道妈妈希望他考好，如果他没考好，妈妈会焦虑的；孩子不敢把没考好的卷子给妈妈签名，同样是因为孩子不想让妈妈为此而焦虑啊。</p><p>所以，当我们透过孩子的行为表现来看本质，我们就会发现，原来我们为之头疼的孩子的问题和缺点，其实原本是优点，只不过孩子还不知道更好的方法罢了。作为父母，我们要做的，不是所谓的“批评教育”，而是透过孩子的行为表现，找到问题的本质，然后教给孩子正确的方法！</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 14,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson15.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之六：毁掉一个孩子仅需一步',
          description: '<p>一个孩子笨手笨脚地帮妈妈洗衣服呢，妈妈怕孩子洗不干净，于是，就把孩子轰走了，“你去玩吧，妈妈来洗”。</p><p>一个孩子颤颤巍巍地帮妈妈把做好的菜从厨房端到餐桌上，妈妈怕孩子把盘子摔了，于是，就把孩子手中的盘子接了过来。</p><p>一个孩子看见妈妈在煮面条，他也想试一下，可是，孩子刚一开始，妈妈看见孩子笨手笨脚的样子，怕孩子有危险，于是，就对孩子说，“算了，还是妈妈来吧”……</p><p>您有没有见过或者听过以上这些情景发生在一个学前的孩子身上呢？也许您会说，我见过，也听说过，但是，我对自己的孩子从来不这样。如果是这样的话，那我要恭喜您了！因为父母这一类的举动，可能会毁掉一个孩子。</p><p>为什么这么说呢？因为孩子的这些行为，虽然笨手笨脚，虽然我们完成起来也许只要1分钟，也要比孩子花10分钟完成得还要好，但是，孩子的这些行为，从本质上来说，是积极的拥抱世界探索世界的行为，我们所要做的，只是陪护，保证孩子的安全，而不是阻断和包办。否则，如果我们的阻断和包办过多的话，孩子可能就不愿意再去拥抱世界探索世界了，也许他宁愿宅在家里，什么都不做；或者，在他在做事情的过程中遇到问题的时候，不是积极地去想办法，而是着急焦虑，发脾气跺脚，甚至直接放弃。如果是这样的话，他不可能拥有更多的成长和生存中的快乐和幸福。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 15,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson16.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之七：别捧杀了你的孩子',
          description: '<p>一个四岁的孩子和小朋友玩一个游戏呢，妈妈在旁边不停地鼓励孩子，“宝宝，妈妈相信你一定可以的，你在妈妈心中是最棒的！”这一类的父母和孩子的沟通您听过吗？也许，您会说，“听过呀，一类的沟通很多呀。”</p><p>的确，在孩子的成长过程中，不少父母可能都会使用这一类的沟通方式。但是，我们要提醒您的是，在孩子的成长过程中，父母们不能对孩子过多地使用“你真棒”这一类的词汇。为什么这么说呢？因为啊，在孩子的成长过程中，如果我们过多地使用了这一类的词汇的话，孩子可能会成长为：做什么事情都是为了别人夸，什么事情做完以后就等着别人夸，如果别人不夸的话，他就会委屈，就会受不了。</p><p>问题是，随着孩子的成长，他所做的事情复杂度和难度也会越来越高，而随着他所做的事情复杂度和难度的越来越高，他对夸的需求度也会越来越高，一旦别人不能充分满足他对“夸”的需求度，他就会凭空生出更多的委屈，更多的受不了，如果是这样的话，孩子的成长过程和生存过程怎么可能会拥有更多的快乐和幸福呢？</p><p>所以，在孩子的成长过程中，“你真棒”这一类的词汇的使用是要有一定的技巧的，不仅如此，这一类的词汇的使用还需要有一定的“度”，如果父母们过多地使用了这一类的词汇，那么，您就有可能会“捧杀”了您的孩子！</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 16,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson17.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之八：逼孩子打招呼，让孩子很受伤',
          description: '<p>首先，我们一起来看两个场景：</p><p>场景一：一位妈妈带着孩子走在路上，迎面来了一个奶奶。于是，妈妈连忙叫孩子打招呼，“快，叫奶奶好”。孩子不情愿地小声说了句“奶奶好！”妈妈嫌声音太小了，于是又跟孩子说“大声点儿啊！”孩子却说什么也不开口了。</p><p>场景二：一位妈妈带着孩子去朋友家，进门前，妈妈就跟孩子说一会儿见到阿姨，要问阿姨好。到了朋友家之后，孩子说什么也不叫，妈妈生气地说，“这孩子，怎么那么不懂事啊？”</p><p>这些场景，在我们的生活中，似乎都是很常见的。但是，父母们，我们可知道，这种逼孩子打招呼的方式，对孩子的成长是有着伤害性的。为什么我们要这么说呢？因为在孩子的成长过程中，这种逼孩子打招呼的培育，最终会让孩子形成机械性的沟通目的，通俗地说，也就是，没有人教，孩子可能就不知道如何说话。</p><p>这一类的孩子，小的时候，会让人觉得很乖，很有礼貌，但是长大了以后，却有可能会沉默寡言。因为当他长大了以后，父母可能不会再像小时候一样，事事处处都告诉他该说什么了，一旦需要他自己独立形成沟通目的，并且去和别人沟通的时候，他就可能不知道如何说，既然不知道如何说，那就只好沉默了。</p><p>所以，在孩子的成长过程中，教孩子打招呼也是要有一定的方法的。如果我们不认识“礼貌”的本质，只是逼孩子打招呼，那么，我们可能会“伤”了孩子。</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 17,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson18.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之九：谁为孩子的行为“买单”',
          description: '<p>一个3岁的孩子把家里的碗打碎了，奶奶怕孩子伤着，赶紧对孩子说，“到一边去，奶奶把这里打扫一下。别碰啊，割到手！”孩子去旁边玩去了，奶奶在收拾摔在地上的碗的碎片。一个两岁多的孩子尿床了，奶奶发现了之后，把床单扯下来洗了，把褥子拿出来晒了，什么也没对孩子说。孩子跟平常一样，玩去了。</p><p>这些情景，在3岁孩子的家庭中，并不罕见。但是，我们一起来想一想，这两个情景中的奶奶的做法，对吗？谁应当为孩子的行为“买单”呢？</p><p>也许有的朋友会说，无所谓啦，反正孩子还小。当然，这一类的观点本无可厚非。但是，如果我们希望我们的孩子未来长大以后，在做事情的时候，能够考虑后果的话，我们最好还是让孩子自己来承担事情的结果，让孩子自己来为自己的行为“买单”。否则，当孩子做了一件事情之后，他根本就不用承担事情的结果，那么，孩子在未来的生活和工作中，在做事情的过程中，也就会不计后果了。而如果一个孩子做事情的时候，根本就不计后果的话，不仅他的父母可能得时时刻刻为他担心，而且总有一天他要为自己的行为付出代价。</p><p>所以，为了我们的孩子长大以后，能够理智地矗立于世界，为了我们终将老去的时候，能够老有所依，父母们，千万不要着急地为孩子的行为“买单”！</p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 18,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson19.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '教子有方系列之十：用“知识”来保护孩子',
          description: '<p>这是一个真实的例子：一个小学五年级的孩子和爸爸妈妈一起在地铁站等车，远远地望见一辆地铁开过来了，孩子赶紧对妈妈说，“妈妈，赶紧往后站，空气流通速度大的地方，气压小，这样，我们背后的大气压力会大于前面收到的大气压力，我们可能会被推向开过来的这辆地铁，很危险的！”</p><p>从这个例子中，您有什么启发呢？作为父母，很多时候，我们总是愿意给孩子最好的保护，不愿意孩子受到哪怕一点点伤害，可是，父母们，我们可知道，应当拿什么来保护孩子呢？</p><p>比如，同样遇到这样的情况，有的妈妈可能会用语言来提醒孩子，“车来了，往后站”；有的妈妈可能会用肢体来提示孩子，比如，把孩子往后拽一拽，但是，不管是哪种形式的提醒，都是出于一个目的，那就是，保护我们的孩子。但是，因为孩子不能从本质上知道到底为什么要往后站，所以，他可能并不会很在意我们的提醒；或者，当他独自一人在候车的时候，他可能并不会想起我们的提醒。如果是这样，当我们在孩子身边的时候，我们还可以保护孩子；当孩子独立去面对世界的时候，谁来保护我们的孩子呢？</p><p>其实，最好的保护孩子的方法原来是知识啊。当孩子知道了这一举动背后蕴含的知识时，他都可以用知识来保护他的父母了，保护他自己当然也就不成问题了。所以，父母们，请一定记住：用“知识”来保护我们的孩子！ </p>',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 19,
          pushedTime: '2019-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/freeClassroom2.jpg","musicUrl":"https://static2.tianqionggongcheng.com/freeLesson20.m3u8"}',
          series: 'free_course',
          type: 'bring_up'
        },
        {
          name: '家厨英语（一）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 20,
          pushedTime: '2020-05-09',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen1.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（二）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 21,
          pushedTime: '2020-05-16',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen2.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（三）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 22,
          pushedTime: '2020-05-23',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen3.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（四）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 23,
          pushedTime: '2020-05-30',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen4.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（五）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 24,
          pushedTime: '2020-06-06',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen5.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（六）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 25,
          pushedTime: '2020-06-13',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen6.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（七）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 26,
          pushedTime: '2020-06-20',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen7-0.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '动画英语（一）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 27,
          pushedTime: '2020-06-19',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon1-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '家厨英语（八）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 28,
          pushedTime: '2020-06-27',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen8-0.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '动画英语（二）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 29,
          pushedTime: '2020-06-19',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon2-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（三）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 30,
          pushedTime: '2020-07-03',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon3-1-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '家厨英语（九）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 31,
          pushedTime: '2020-07-04',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen9-0.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（十）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 32,
          pushedTime: '2020-07-11',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen10-0.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '动画英语（四）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 33,
          pushedTime: '2020-07-10',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon4-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（五）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 34,
          pushedTime: '2020-07-17',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon5-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '家厨英语（十一）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 35,
          pushedTime: '2020-07-18',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen11-0.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '家厨英语（十二）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 36,
          pushedTime: '2020-07-25',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/lesson-in-kitchen.jpg","musicUrl":"https://static2.tianqionggongcheng.com/lesson-in-kitchen12-0.m3u8"}',
          series: 'free_course',
          type: 'kitchen'
        },
        {
          name: '动画英语（六）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 37,
          pushedTime: '2020-07-24',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon6-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（七）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 38,
          pushedTime: '2020-07-31',
          question: '{"teacher":"王科敏","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon7-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（八）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 39,
          pushedTime: '2020-08-07',
          question: '{"teacher":"王科敏 ","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon8-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（九）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 40,
          pushedTime: '2020-08-13',
          question: '{"teacher":"王科敏 ","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon9-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（十）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 41,
          pushedTime: '2020-08-20',
          question: '{"teacher":"王科敏 ","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon10-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（十一）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 42,
          pushedTime: '2020-08-27',
          question: '{"teacher":"王科敏 ","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon11-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        },
        {
          name: '动画英语（十二）',
          description: '',
          teacher: '</br><strong>主讲人：王科敏',
          imageUrl: 'https://static.tianqionggongcheng.com/image/WechatIMG468.jpeg',
          pushId: 43,
          pushedTime: '2020-09-03',
          question: '{"teacher":"王科敏 ","pic":"https://static2.tianqionggongcheng.com/cartoon.jpg","musicUrl":"https://static2.tianqionggongcheng.com/cartoon12-0.m3u8"}',
          series: 'free_course',
          type: 'cartoon'
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer1,
    'aplayer': Aplayer
  },
  computed: {
  },
  created() {
    // setTimeout(function() {  }, '5000')
    this.getQuestion()
    console.log(this.$store.getters.code)
    if (this.openId !== '') {
      this.getUserInfo()
    }
    console.log(this.showPlayer)
  },
  methods: {
    toLogin() {
      this.$router.push({ path: '/login', query: {
        parameter: this.$router.currentRoute.query.parameter || '',
        agencyId: this.agencyId,
        redirect: encodeURIComponent(this.$router.currentRoute.fullPath),
        redirect_wx: this.$router.currentRoute.fullPath
      }})
    },
    getQuestion() {
      this.pushId = this.$router.currentRoute.query.pushId
      this.loading = true
      this.$emit('create') // for test
      this.lesson = this.list[this.pushId]
      console.log(this.lesson)
      this.name = this.lesson.name
      this.description = this.lesson.description.replace(/\\n/g, '')
      this.question = JSON.parse(this.lesson.question)
      console.log(this.question)
      clearTimeout(this.timer)
      this.imageUrl = this.question.pic
      // setTimeout(function() { }, '5000')
      // var blob = new Blob([this.question.musicUrl])
      // this.musicUrl = URL.createObjectURL(blob)
      // this.musicUrl = this.question.musicUrl || 'https://static2.tianqionggongcheng.com/freeLesson20.m3u8'
      this.timer = setTimeout(() => {
        console.log(this.question.musicUrl)
        this.musicUrl = this.question.musicUrl || 'https://static2.tianqionggongcheng.com/freeLesson20.m3u8'
      }, 1000)
      console.log(this.musicUrl)
      this.pushedTime = this.lesson.pushedTime
      this.loading = false
      this.showPlayer = true
      console.log(this.showPlayer)
      // this.gamePic = this.question.picUrl
    },
    // 获取用户信息判断有无openid
    getUserInfo() {
      this.loading = true
      fetchUserInfo().then(response => {
        this.currentOpenId = response.data.openId || ''
        if (this.currentOpenId === '' && this.openId !== '') {
          this.userInfo.registerSource = this.agencyId
          this.userInfo.registerSourceRelId = this.openId
          this.test = '我是测试代码Openid:' + this.currentOpenId
          console.log('录入')
          console.log(this.userInfo)
          this.loading = true
          this.$store.dispatch('MergeOutsideUser', this.userInfo).then(() => {
            this.loading = false
            // this.showDialog = true
          }).catch((err) => {
            this.loading = false
            console.log(err)
          })
        } else if (this.currentOpenId !== this.openId && this.openId !== '') {
          this.isWrongOpenId = true
          console.log('拒绝录入 isWrongOpenId 两个不一样')
        }
        this.loading = false
      })
    }
  }
}
</script>

<style lang="css" scoped>
  html {
    color: #000
  }
  .classroomButton {
    margin-top: 6px;
    width: 100%;
  }
  .image {
    width: 100%;
    display: block;
  }
  .bg-purple {
    /* background: #fef6f6; */
  }
  .row-bg-card {
    padding-top: 30px;
  }
  .grid-content {
    background: linear-gradient(rgb(205, 237, 254), rgb(244, 250, 255), rgb(209, 236, 252));
    margin-top: 0px;
    border-radius: 4px;
    padding-bottom:  10%;
    min-width: 280px;
    max-width: 600px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;

  }
  .detail {
    padding: 0 1rem;
  }

  p {

  }
  .site-title {
    font-size: 1.1rem;
    line-height: 1rem;
    color: #292929;
    text-align: center;
    padding-top: 0rem;
    margin-bottom: 0;
  }
  .site-time {
    margin: 0 auto;
    position: absolute;
    left: 0;
    right:0;
    text-align: center;
    width: 240px;
    font-size: 0.7rem;
    line-height: 2.0rem;
  }
  .site-cont {
    color: #666;
    font-size: 1.0rem;
    line-height: 2.0rem;
    text-align: left;
  }
  .inputWrapper {
    width: 100%;
    margin: 0 auto;

  }
  .form-control {
    width: 100%;
  }
  .buttonWrapper {

  }
  .messageBox1 {
    max-width: 100px;
  }
</style>
