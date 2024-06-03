import React from 'react'
import styles from './dashboard.module.scss'

const Dashboard = ({ products }) => {

    // console.log(products)
    const totalRecords = products.length

    let now = new Date();

    let dayNow = now.getDay();

    let currentDay = '';

    let statusDay = ''



    switch (dayNow) {
        case 0:
            currentDay = 'Chủ Nhật';
            statusDay = '. Chúc bạn cuối tuần vui vẻ!'
            break;
        case 1:
            currentDay = 'Thứ hai';
            statusDay = '. Chúc bạn đầu tuần vui vẻ!'
            break;
        case 2:
            currentDay = 'Thứ ba';
            break;
        case 3:
            currentDay = 'Thứ tư';
            break;
        case 4:
            currentDay = 'Thứ năm';
            break;
        case 5:
            currentDay = 'Thứ sáu';
            break;
        case 6:
            currentDay = 'Thứ bảy';
            statusDay = '. Chúc bạn cuối tuần vui vẻ!'
            break;
        default:
            currentDay = 'Not Found';
            break;
    }

    // console.log(currentDay);


    return (
        <>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <section>
                        <div className={styles.statistics}>
                            <div className={styles.item}>
                                <b className='mb-2'>Thống kê sản phẩm</b>

                                <div className={styles.data}>
                                    <p>Số lượng sản phẩm: <b>{totalRecords}</b></p>
                                </div>
                            </div>


                            <div className={styles.item}>
                                <b className='mb-2'>Thống kê người dùng</b>

                                <div className={styles.data}>
                                    abc
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* banner */}
                    <section className='my-3'>
                        {/* <div></div> */}

                        <div className={styles.banner}>
                            <b>{`Xin chào, hôm nay là ${currentDay}`}
                                {statusDay ? statusDay : ''}
                            </b>

                        </div>
                    </section>

                    <div className={styles.mainContent}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolor tempora cumque itaque nihil omnis natus iure, doloribus culpa mollitia, tenetur blanditiis tempore, deleniti quasi amet? Quisquam odio facilis impedit.
                        Debitis ab illum ullam in quibusdam natus nihil, explicabo modi expedita soluta, saepe necessitatibus? Delectus, laborum corrupti sed deleniti, dolorum esse facilis voluptates provident illum voluptatem reiciendis fuga totam ipsa!
                        Magnam fuga possimus unde reiciendis repellendus dolor quos ducimus aliquid, eum facilis. Aut dolores saepe neque minus voluptates deserunt porro natus consequatur, nisi aliquam sint dolorum suscipit, deleniti unde autem!
                        Aut laboriosam labore ullam, cupiditate at esse nostrum nihil officiis facilis nam omnis illum rerum sequi non natus deleniti commodi accusamus dolorum animi doloremque eligendi perferendis debitis? Unde, necessitatibus earum.
                        Fuga molestias laudantium odit, saepe sequi perspiciatis consectetur veniam esse repellendus quis aspernatur consequuntur assumenda ipsa nisi quae ab, impedit obcaecati nam. Iusto culpa rem esse sed, error nostrum quidem.
                        Dignissimos eum eos corrupti distinctio laborum sit reiciendis accusantium, exercitationem earum aut ipsa atque excepturi nemo eaque, possimus deleniti maxime suscipit! Tenetur ut doloremque, quod voluptatum reiciendis praesentium harum. Rem.
                        Doloribus dolorem et autem? Nobis totam, earum repudiandae mollitia recusandae non ad fugiat id quibusdam, dolorum beatae tenetur vel sapiente nesciunt fuga modi, aliquam delectus corporis quisquam veniam aperiam quo.
                        Aliquam ipsa ducimus eveniet consectetur, natus facilis ratione quisquam provident fugiat accusantium sequi quia optio distinctio sed! Suscipit, commodi. Quam vero placeat quaerat esse quo suscipit iste, magnam totam perspiciatis?
                        Amet, mollitia. Nostrum illum labore dolorem architecto aperiam fuga maiores doloremque mollitia perspiciatis recusandae corporis, deserunt neque deleniti expedita, reprehenderit tempore, nam consequatur provident sint. Ut repellendus harum voluptates voluptas?
                        Accusamus, harum! Itaque dolorem voluptas magni, obcaecati provident earum quasi, fugiat sed nihil ex maxime explicabo doloribus quia illum at alias ullam. Quas tenetur obcaecati commodi quidem vitae dicta totam?
                        Corrupti alias vel soluta repudiandae consequatur modi mollitia repellendus enim aliquid id suscipit saepe, exercitationem ipsa obcaecati quibusdam fuga quis? Quidem soluta totam fuga modi animi quasi odio incidunt nulla.
                        Molestias quaerat consequuntur tempora totam nam veniam accusamus molestiae libero expedita eaque, ea voluptatum porro ad nobis laboriosam temporibus earum quam quasi quas. Voluptatum, fuga dolor. Libero in dolorum dolor!
                        Quod, quis facilis earum et quos illo dignissimos nulla, dolorum neque ad a in ab non aliquid incidunt sed porro voluptas? Dolore excepturi magni fuga possimus non fugiat voluptatem culpa!
                        Praesentium sit eligendi veritatis, illo dignissimos temporibus ratione quidem culpa accusantium quo reiciendis laboriosam tenetur molestiae consectetur quae. Voluptate, nihil? Quos asperiores quasi laudantium hic illum, voluptatum error a culpa.
                        Assumenda repudiandae esse porro adipisci fugiat illo atque dicta in nesciunt tempora voluptate, labore exercitationem voluptas quam! Consequuntur perferendis, expedita eligendi voluptate nisi nihil delectus corporis deserunt. Voluptate, consectetur tempora.
                        Repellat, voluptatum molestias. Esse repellat debitis ipsa, maiores nemo eveniet voluptate quibusdam nobis in, earum eum quod provident sunt adipisci consectetur harum! Sapiente rem voluptatem eligendi deleniti obcaecati voluptatibus adipisci.
                        Animi deleniti aperiam ad dolores totam. Est, quae eius veritatis commodi itaque placeat dignissimos obcaecati facere vel necessitatibus dolor id harum laboriosam molestiae totam adipisci excepturi illum similique atque fugit.
                        Eaque tenetur hic ipsam temporibus explicabo cum porro voluptas nisi dolorem quas deserunt facere, eos unde molestiae vel! Ipsum cupiditate et deserunt omnis mollitia, corporis exercitationem deleniti consectetur quaerat doloremque?
                        Magnam quidem impedit necessitatibus. Voluptate corrupti soluta odit autem amet? Minus, beatae. Optio quas quos voluptatibus, dignissimos expedita minima recusandae earum dolores, sit cumque impedit suscipit officiis aut sapiente perspiciatis.
                        Consequuntur aut repellat praesentium, sapiente quasi accusamus harum minus neque non amet! Est aspernatur quibusdam, sit molestiae voluptates aperiam recusandae exercitationem alias soluta natus, sed non nostrum expedita at vero!
                        Officia cum veritatis velit quae quod rerum enim illo praesentium! Dolore, cum. Maiores, quibusdam enim, accusantium aliquam nemo porro eveniet neque voluptatibus labore minima ab vitae. Ullam nemo optio ipsam!
                        Sit repellendus odio nemo magnam nulla ut laborum tempore ab numquam recusandae, nihil nostrum vel est delectus maiores cumque consequuntur non facilis iste minus quas unde quod? Impedit, officiis sint.
                        Labore, quae. Odio ducimus ullam quaerat velit fugiat ipsam quia accusantium. Ullam repudiandae quos et aliquid mollitia reiciendis error nihil. Explicabo temporibus iusto officiis quisquam id expedita cum, nisi fugiat?
                        Repudiandae dolorem culpa iusto ea optio maxime consequuntur voluptatem nemo temporibus alias incidunt illum fugiat cum voluptas, eos, veritatis veniam illo recusandae cupiditate totam fuga rem beatae! Repellat, sint est.
                        Quibusdam explicabo dolores alias voluptates facilis facere eos itaque ipsum illo iusto obcaecati earum nostrum necessitatibus, animi provident temporibus nesciunt aperiam perferendis, ullam quo! Vel reprehenderit veniam debitis suscipit hic?
                        Velit nam aliquid, maxime optio repellendus error aut ratione ipsam quod fuga corporis eos deleniti quaerat distinctio adipisci soluta dicta eum architecto ex vero vel, numquam aperiam. Animi, impedit porro.
                        Aliquam laborum sunt, necessitatibus consequuntur repudiandae quos explicabo ratione, cupiditate nulla aut accusamus assumenda modi quibusdam illum? Sapiente beatae debitis, autem dolores ex rerum incidunt impedit esse dignissimos doloribus eaque!
                        Quam distinctio ut delectus praesentium quidem consectetur nesciunt, itaque accusamus, dignissimos sint ducimus quis odio laboriosam. Id labore, vel quod at nostrum cupiditate eaque asperiores inventore? Cupiditate soluta natus perferendis!
                        Itaque sequi inventore reprehenderit, ex at non quas animi deserunt fuga nam similique vero voluptate ipsa aut sunt totam ipsum voluptatum rerum ut voluptas distinctio dolore explicabo mollitia. Reprehenderit, totam?
                        Eos omnis asperiores sequi accusantium quisquam. Atque aspernatur debitis molestiae tempora expedita odit reiciendis laboriosam ab eaque voluptate architecto asperiores in, at a fuga! Illo eius cupiditate voluptatum animi fugiat.
                        Corporis suscipit consequatur odio repudiandae praesentium ea neque voluptate pariatur commodi, autem sapiente id aperiam recusandae nulla nam unde inventore beatae soluta asperiores facilis aliquam totam harum nesciunt nihil. Voluptate.
                        Quae, cumque dolorem esse, commodi dolore magni laudantium praesentium aliquam in distinctio doloribus suscipit ut ipsum id, nemo repellendus et mollitia amet? Soluta enim doloribus cumque obcaecati voluptatibus, explicabo magnam.
                        Consequatur perferendis distinctio voluptatibus? Soluta eveniet, vero quibusdam dolor cum, dolorem alias ad vel obcaecati expedita consectetur possimus! Provident sit laudantium quis ipsam repellendus adipisci sapiente molestias iure numquam at.
                        Asperiores temporibus, ratione enim pariatur aut magnam reprehenderit, expedita totam qui beatae eos quia, ea consequatur at consequuntur. Temporibus provident cumque quos corrupti consequuntur eos nobis inventore ipsa ab delectus?
                        Sapiente laboriosam pariatur illum repellendus perspiciatis porro, expedita harum sunt aperiam! Soluta non fuga, pariatur, quos iste, rem perspiciatis cupiditate perferendis modi eum consectetur. Doloremque iusto libero praesentium. Reiciendis, expedita!
                        Voluptatem architecto et enim facilis maxime esse odit consectetur nostrum corrupti autem vitae nobis obcaecati dolorum voluptatibus tenetur beatae dolorem amet quam voluptates, exercitationem dolore! Esse officia rem accusamus magni.
                        Numquam asperiores recusandae, vitae deserunt maxime possimus ducimus impedit, odit labore tempora animi quam quos reprehenderit, eos nemo unde temporibus cupiditate qui suscipit itaque laboriosam facilis id. Mollitia, eligendi labore.
                        Fugiat, aspernatur ex sequi fugit id voluptates doloremque, consequuntur alias eveniet dolor maiores optio tempore excepturi assumenda recusandae iure! Fugit, voluptatem? Asperiores mollitia soluta sapiente optio quas fuga distinctio. Velit!
                        Odit ad libero officia voluptate, asperiores maxime non corporis aperiam sed corrupti adipisci earum sint amet? Autem fugit odit ipsum! Iusto laudantium alias reprehenderit ut ex laborum dolores eaque eius?
                        Facilis quisquam voluptates harum incidunt exercitationem velit praesentium sit maxime commodi. Accusamus adipisci beatae eum voluptatibus commodi reprehenderit alias repudiandae nam expedita, ipsum minima, ipsa mollitia dignissimos libero quidem vel.
                        Recusandae animi nobis accusamus necessitatibus delectus! Sapiente illum consequuntur est omnis vel eius blanditiis eaque! Rem sapiente, perspiciatis quaerat ipsa quibusdam nam harum unde ad cupiditate aut officia necessitatibus reprehenderit.
                        Quia sequi, officiis ea non recusandae nobis, sit incidunt cupiditate atque natus architecto, modi officia et debitis magnam veniam facilis ipsam esse saepe autem. Velit assumenda necessitatibus distinctio voluptatibus nemo.
                        Voluptates id fugit sequi recusandae iusto assumenda vitae nesciunt doloribus. Quo similique deleniti iusto blanditiis nisi architecto veritatis cum culpa corrupti alias. Iure laboriosam, dolorum reiciendis iste distinctio harum soluta!
                        Deleniti, fugiat! Quod, velit? Nulla nesciunt asperiores nobis voluptatum provident! Inventore culpa ipsa ex molestiae soluta aut deserunt cumque repellat vero nulla, asperiores eligendi nemo laboriosam sunt. Dolorem, dicta fugiat.
                        Assumenda minus omnis nulla, fugit ullam sapiente expedita voluptas magnam possimus distinctio. At cupiditate animi numquam odit, enim, maxime sunt ducimus dicta ratione amet minus aperiam laudantium, iste non? In.
                        Voluptatum pariatur, dolorum porro laborum tenetur accusantium nisi quos enim ducimus soluta ipsam aliquam deserunt, consequatur iure laudantium unde rem. Obcaecati repellendus perferendis omnis ullam doloribus fugit debitis laboriosam molestias?
                        Optio commodi esse asperiores natus vero excepturi magnam consequuntur pariatur nesciunt necessitatibus iure mollitia odit modi, aut doloribus perspiciatis quos officia quae dicta dolores rerum et earum autem similique? Enim!
                        Cum ipsa omnis voluptatem ab? Quidem ipsum magni ducimus laborum perspiciatis, soluta ab consectetur tempore maxime accusamus impedit facere at porro voluptate officiis ad tempora ratione sapiente hic error placeat.
                        Unde, accusamus pariatur? Sint perspiciatis reprehenderit ipsum dolor consectetur voluptate temporibus? Consequuntur possimus eum magnam dolorem hic ab culpa consequatur asperiores repellendus labore, modi qui fuga illum repudiandae nostrum architecto.
                        Illo, facere inventore? Voluptatibus adipisci harum dolorem cumque fugiat, laborum asperiores illum alias animi ab mollitia exercitationem consequuntur? Quas obcaecati itaque placeat non ut odio molestias repellat laudantium, sequi aliquam.
                        Iure praesentium repellat consequatur, et quaerat ratione eum rem, ipsum mollitia at eaque! Corrupti maiores sapiente eos tempora in optio assumenda aspernatur numquam rerum provident deserunt necessitatibus, omnis autem voluptate.
                        Dolorem vel voluptates natus molestias in tempore voluptatibus, quia sunt fuga doloribus delectus laborum quis ex odit eos id, excepturi, sint accusamus ipsam exercitationem obcaecati maxime dicta dolores? Saepe, velit.
                        Explicabo voluptatem nam cum magni cupiditate adipisci, impedit obcaecati accusamus magnam expedita dignissimos, neque minus omnis accusantium suscipit sapiente officiis, at fuga rem. Laudantium voluptates ut blanditiis provident nobis distinctio?
                        Odit nisi distinctio soluta, minima provident ad! Reiciendis omnis at temporibus ipsam repellat, voluptate ad possimus, ipsa iure deserunt vero nostrum, modi officia. Itaque commodi repellat est maxime, praesentium veniam?
                        Quidem unde consequuntur ad veniam minus facilis laudantium fuga cum ex, perferendis et natus repellendus ipsa, nesciunt adipisci! Repellendus deserunt minus unde tenetur temporibus doloremque ad nobis eligendi ipsum perferendis?
                        Perspiciatis, repellat vero recusandae officia porro cupiditate exercitationem quos, est nobis ipsum unde provident omnis repudiandae quisquam voluptatum voluptates optio facere ipsa esse incidunt quam! Architecto rerum sit atque similique!
                        Magni similique, quos quidem sequi impedit veritatis repellendus harum sit distinctio quod voluptates ipsum pariatur exercitationem maiores aut atque in ipsa consequuntur rerum blanditiis, animi omnis? Ipsa mollitia autem aliquam.
                        Atque, dolorum assumenda minus aliquid ullam porro dignissimos provident libero quis exercitationem doloremque cumque fugiat. Ullam tempora voluptatibus ducimus architecto voluptatum, quo saepe illum ut? Deserunt mollitia aperiam quibusdam deleniti.
                        In praesentium enim deleniti exercitationem ad totam consequuntur corrupti? Ipsam quaerat quia praesentium veritatis exercitationem necessitatibus distinctio dicta, impedit laudantium vitae accusamus fugit voluptatum cumque corporis perspiciatis possimus ducimus eos.
                        Facere earum cum deleniti a inventore esse odio deserunt et ullam velit, omnis tempore quae repellat reprehenderit amet hic? Commodi placeat, molestiae dolor quos quas eum quo magnam. Cumque, impedit!
                        Quis quaerat repudiandae, molestiae ipsum nisi fugiat necessitatibus magnam distinctio ipsa vel temporibus commodi deserunt? Obcaecati laboriosam quae sequi quibusdam, nam quasi? Iure porro dolor maiores optio eum a quis!
                        Accusantium beatae sed vero est soluta dolorum mollitia magni veritatis, laboriosam nesciunt perferendis impedit quibusdam, natus ratione recusandae placeat minus dicta quae laudantium. Incidunt numquam dolore molestiae veritatis, sequi quia!
                        Molestiae illum natus molestias, eaque veniam alias eos numquam? Dolorum, possimus omnis. Iusto qui non assumenda. Molestiae placeat totam accusantium nam doloribus laudantium laborum dignissimos ullam maxime excepturi, quis nisi!
                        Iusto magnam debitis deserunt dignissimos ducimus nobis facilis nam ad consequatur quaerat! Aliquam quod quidem quis id commodi quos sed harum, incidunt dolor quam voluptatem similique eum ut libero enim.
                        Dolore voluptatibus eius, nemo a deleniti adipisci non reprehenderit. Ducimus quia in consequatur omnis harum! Cum eius dolore nemo vel iste obcaecati ratione, odio et sed, neque laborum facere at.
                        Minus, quos. Praesentium nam quibusdam, eum debitis itaque explicabo aliquid modi? Quam voluptatem eos, facere tempore quibusdam quaerat pariatur consequuntur, quidem placeat vero ipsam aliquid blanditiis et! A, deserunt possimus.
                        Molestiae, aspernatur beatae perferendis atque rem quisquam distinctio culpa, nostrum perspiciatis facere officia placeat asperiores dicta dolor quam consequuntur optio vitae ipsum natus iusto consectetur possimus incidunt doloremque esse! Architecto?
                        Repellendus mollitia quo officiis architecto totam id corporis delectus excepturi labore tempore saepe, quaerat ex similique ipsa molestiae, esse, autem aliquam rem vel tenetur aut repudiandae! Repellendus asperiores ratione officiis?
                        Adipisci dolorum pariatur nemo, nesciunt iusto sequi repellendus temporibus aliquid eius perferendis exercitationem quae aspernatur similique omnis velit atque accusantium earum, recusandae nostrum magnam inventore! Doloremque id rem corrupti quasi!
                        Optio enim sit cumque eos doloribus. Recusandae ullam quos, rerum culpa nihil blanditiis quo dolore quod repellat a corrupti voluptates laboriosam sed fugiat laudantium aut itaque harum similique nam suscipit!
                        Quam quibusdam porro, in unde at eos fugiat reiciendis fugit vitae ut debitis incidunt obcaecati mollitia enim quis atque perferendis nesciunt non odit eius, quas earum. Autem nemo ab pariatur.
                        Iste corporis sapiente fugit unde officiis nemo aut magnam, quas soluta iure? In dolores ipsa, distinctio nulla necessitatibus reiciendis ad cupiditate mollitia odit enim dolorum placeat odio aperiam sed explicabo.
                        Tenetur veritatis harum obcaecati provident repudiandae nemo quis voluptates dolorem sit iure cupiditate nulla sed atque labore, rerum quo voluptas at laudantium. Cumque suscipit, fugit in laborum maiores adipisci beatae.
                        Adipisci assumenda, atque excepturi autem nesciunt illo enim nemo, vero laborum ut tempore modi rerum quidem ea suscipit ratione cupiditate odit distinctio magni consequatur incidunt veritatis! Quis doloremque illo non?
                        Alias praesentium recusandae fuga explicabo sed consequuntur? Nam a iusto inventore. Suscipit vero ullam nulla maiores sed commodi non cum iusto modi minus perferendis quaerat, cupiditate perspiciatis beatae eveniet quae!
                        Placeat ea unde quae asperiores ipsa quis in sit soluta dolorum ex nam debitis est, ipsum iure non possimus voluptate laudantium earum officiis doloremque culpa! Recusandae architecto et commodi impedit!
                        Temporibus accusantium cupiditate ullam impedit, autem voluptatibus beatae facilis consequuntur ipsum natus qui nisi possimus dolore error sit neque debitis veniam, dolor soluta! Ipsam, id facere maiores asperiores commodi voluptatum!
                        Quidem quo sint est aliquid fuga possimus consequatur, earum dolore laborum soluta eaque eius adipisci. Aliquid rem quo quam, voluptatum unde, incidunt odio quas placeat a exercitationem, dolorum obcaecati perspiciatis?
                        Fugit unde illum, ipsam placeat velit, beatae nemo aliquam iure officia aperiam ratione molestiae voluptates atque excepturi repellendus autem delectus molestias quasi assumenda sapiente sed! Quaerat magnam quasi illo perferendis.
                        Adipisci nemo, veniam quasi mollitia minus corrupti sunt animi fugiat doloremque, deserunt ipsam nam, dicta nihil cum quo eligendi dignissimos eveniet nulla illo a assumenda maxime odit ad? Ducimus, laudantium.
                        Incidunt consectetur harum omnis, ipsam minus consequatur reprehenderit facere soluta mollitia quam libero debitis, unde suscipit optio voluptatum alias vitae magnam, eligendi nihil expedita nesciunt totam temporibus maxime? Expedita, impedit.
                        Repellat voluptatibus pariatur modi, inventore quaerat excepturi debitis rem non quo, molestias fuga, magni beatae dicta! Cupiditate harum repellat perspiciatis in! Sed vero in aspernatur laborum voluptates, amet voluptas nesciunt.
                        Iste a alias aspernatur suscipit optio ipsum ducimus architecto voluptatibus, similique minus enim nostrum ratione iure necessitatibus beatae vitae aperiam asperiores quisquam modi ipsa tempore? Eos, nostrum. Adipisci, mollitia temporibus.
                        Itaque ipsa aliquam, a, molestias libero ipsum, perferendis reiciendis maiores quasi architecto nostrum. Facere molestiae qui quos saepe reiciendis! Nostrum labore nam reiciendis illo enim optio nihil. Ut, asperiores. Consequuntur!
                        Molestias repellat soluta officia modi enim facere inventore aut unde exercitationem? Nemo officia tenetur perferendis quisquam laudantium aspernatur sit. Delectus inventore in vero eum magni ullam voluptates consectetur dignissimos dolorem?
                        Aliquid perferendis voluptate illum maiores, vitae deserunt qui! Quia soluta vero nostrum aperiam ex pariatur, quae ullam id, deleniti perferendis odit, veritatis dolorem facere dicta magni aliquid adipisci aut placeat.
                        Laboriosam error repellendus totam iure rem veritatis repudiandae aliquam natus! Molestiae quae eveniet quos inventore magni eos mollitia quas debitis soluta eligendi sunt, modi a aspernatur dolor aliquid consequuntur reprehenderit.
                        Maxime, molestiae eligendi aspernatur nostrum quaerat voluptas doloribus autem doloremque maiores unde facilis id eius consectetur commodi cupiditate? Culpa ipsa, magnam obcaecati repellat libero illo quae perferendis neque. Ad, praesentium!
                        Nesciunt odit eaque repellat corrupti harum ipsa vitae, alias consequatur obcaecati delectus cum blanditiis illo assumenda odio fugit vero quia tenetur, quasi atque ab a dolorem voluptas culpa. Accusantium, tempore?
                        Eveniet non consequuntur ipsam. Dolore fuga nesciunt laborum, iste amet voluptatum corporis explicabo dolores unde. Adipisci nam hic culpa, quo fuga, ratione quos ipsa, perferendis fugit debitis dolorum provident. Reprehenderit.
                        Debitis neque corporis laudantium accusantium, magnam dolore nisi. Provident ipsa omnis assumenda, ipsam temporibus tenetur inventore officia quo incidunt autem hic porro, tempore alias obcaecati voluptatem optio, ratione dolorem ut!
                        Iusto sunt maiores, quasi ut necessitatibus aperiam dolorem! Quos quaerat voluptates ipsam sed et esse dolorem sunt consectetur odio porro cumque harum repudiandae ipsa, quam eius nam ut doloribus iure.
                        Nam ab consequatur deleniti harum sunt ullam officia repellendus. Tenetur est quam, inventore, officiis explicabo impedit ipsum totam libero, magnam odit quia quod id ut non. Odio aspernatur recusandae ab.
                        Nobis, aut doloribus delectus modi quo voluptas dolore sint nulla sapiente earum animi reiciendis dolorum perspiciatis sed qui laborum dicta tenetur. Delectus temporibus facilis, doloremque vel deserunt qui laudantium voluptas?
                        Animi voluptatum nostrum, saepe rem labore nesciunt? Corporis porro odit eius neque. Assumenda iure eaque magni odio repudiandae dolor itaque delectus, neque dolorem consectetur, commodi, nobis molestias? Consectetur, illo velit?
                        Doloribus et qui delectus id accusamus eaque sint! Fugit recusandae doloremque, possimus voluptatum error quod dignissimos repudiandae magnam? Id assumenda illo dolore dolor ab amet laudantium placeat magnam debitis vel!
                        Facilis, magnam earum corporis iusto dolorem voluptates delectus deleniti eaque reprehenderit cum hic veniam, accusamus exercitationem repellat enim aliquid. Labore ducimus tempora commodi, deserunt quidem molestiae unde ipsam excepturi nemo.
                        Recusandae nisi saepe illo dicta doloribus labore at distinctio quam id sint et vero tenetur, dolor a ut veritatis eveniet perferendis quo quae modi commodi iusto quidem. Alias, illo facere?
                        Itaque asperiores neque aperiam reiciendis voluptate quos porro blanditiis. Laborum quidem obcaecati, modi culpa, velit numquam ad sint quo voluptatibus facere atque esse vero odio consectetur aliquid alias ducimus rerum!
                        Repellat nihil, voluptatem ipsam quidem aliquid laborum odio quaerat iste velit quasi non dolorem, repudiandae nam qui veritatis, delectus a voluptas eveniet! Voluptas tempore hic, asperiores reiciendis corporis ea libero.</p>
                    </div>
                </div>


                <div className={styles.contentRight}>
                    <div className={styles.top}>
                        <div className="">3</div>
                    </div>

                    <div className={styles.bot}>
                        <div className="">4</div>
                    </div>
                </div>
            </div>


            <section className='my-3'>

            </section>
        </>
    )
}

export default Dashboard