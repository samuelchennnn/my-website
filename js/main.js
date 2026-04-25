/* ============================================
   Portfolio — Product-level Interactions
   Modal, count-up, timeline, filters, form, theme, i18n
   ============================================ */

// ==========================================
// I18N — Translations
// ==========================================
const i18n = {
  en: {
    site_title: 'Chen Songtao · Portfolio',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    hero_desc: 'Building at the intersection of technology, finance, and global markets. Computer Science student · GDSC · IELTS Reading 8.0 · Based in Shenzhen.',
    hero_meta_location: 'Shenzhen',
    hero_meta_reading: 'Reading Bloomberg / SCMP',
    hero_meta_building: 'Building SZ-HK Lecture & Event Community',
    hero_card_role: 'Tech · Finance · Global Markets',
    hero_stat_community: 'Badminton',
    hero_stat_report: 'Exploring',
    hero_btn_projects: 'View Projects',
    hero_btn_contact: 'Get in Touch',
    about_label: 'About',
    about_title: 'Who I Am',
    about_desc: 'A CS student who bridges technology, finance, and international relations.',
    about_p1: "I'm a 21-year-old Computer Science student (top 20% of class) based in Shenzhen, China. Founded and operate the SZ-HK Premium Lecture & Event Sharing Community (~500 members). Interviewed U.S. Treasury Secretary Scott Bessent. Advised on cross-border IPO strategies.",
    about_p2: "I read Bloomberg and SCMP daily, track AI and SaaS chuhai trends, and have a proven ability to operate at the intersection of technology, finance, and international policy. I'm a Google Developer Student Club member, an IELTS Reading 8.0 scorer, and someone who believes the best opportunities lie at the crossroads of disciplines.",
    highlight_1_label: 'Love playing badminton',
    highlight_2_label: 'Love exploring',
    projects_label: 'Projects',
    projects_title: 'Selected Work',
    projects_desc: 'Projects across community, media, and research.',
    filter_all: 'All',
    filter_community: 'Community',
    filter_research: 'Research',
    filter_media: 'Media',
    view_details: 'View details',
    proj_0_title: 'SZ-HK Premium Lecture & Event Sharing Community',
    proj_0_desc: 'Founded and operated a curated lecture and event sharing community. ~500 general members, ~100 premium users. Content partnerships with HKU Business School, PKU HSBC Business School, and Great Bay University.',
    proj_0_tag1: 'Community Operations',
    proj_0_tag2: 'Content Curation',
    proj_0_tag3: 'User Tiering',
    proj_1_title: 'Interviewed U.S. Treasury Secretary',
    proj_1_desc: 'Interviewed Secretary Scott Bessent in Kuala Lumpur during the U.S.-China trade talks in October 2025. Captured on-site footage and key diplomatic moments; published on Xiaohongshu with 100+ engagements.',
    proj_1_tag1: 'International Reporting',
    proj_1_tag2: 'On-site Coverage',
    proj_1_tag3: 'Content Strategy',
    proj_2_title: 'ASEAN-HKEX Research Report',
    proj_2_desc: 'Screened 2,600 HK-listed companies → 23 ASEAN-linked → deep-dive on 4. Produced a 30+ page report covering macro analysis, valuation modeling (PE/PB), and a cross-border risk assessment framework.',
    proj_2_tag1: 'Financial Analysis',
    proj_2_tag2: 'Valuation Modeling',
    proj_2_tag3: 'Risk Framework',
    proj_3_title: 'GBA × Johor-Singapore SEZ Exchange',
    proj_3_desc: 'Commissioned by a former Singaporean trade official to plan and execute a youth exchange program between the Greater Bay Area and the Johor-Singapore Special Economic Zone. Coordinated cross-border stakeholders and resources.',
    proj_3_tag1: 'Cross-border Coordination',
    proj_3_tag2: 'Event Planning',
    proj_3_tag3: 'International Relations',
    proj_4_title: 'ASEAN Economic Forums',
    proj_4_desc: 'Participated in high-level ASEAN economic forums and the Malaysia Annual Economic Forum, engaging with the Prime Minister of Malaysia and multiple cabinet ministers on policy and economic outlook.',
    proj_4_tag1: 'Policy Analysis',
    proj_4_tag2: 'Economic Forums',
    proj_4_tag3: 'Global Affairs',
    proj_5_title: 'Industrial Finance Research Program',
    proj_5_desc: 'Completed the SYSU-Shenzhen Advanced Research Program on Industrial Finance (Aug 2025), deepening understanding of industrial policy, financial markets, and economic trends.',
    proj_5_tag1: 'Industrial Finance',
    proj_5_tag2: 'Policy Research',
    proj_5_tag3: 'Executive Education',
    exp_label: 'Experience',
    exp_title: 'Timeline',
    exp_desc: 'From computer science to cross-border finance — a non-linear path. Click any item to expand.',
    tl_0_title: 'B.Sc. Computer Science',
    tl_0_preview: 'Top 20% of class. Key courses: Computer Organization, Software Engineering, Java, Operating Systems, Discrete Math. GDSC member.',
    tl_0_detail_label: 'Academic Highlights',
    tl_0_d1: 'Top 20% of Computer Science class',
    tl_0_d2: 'Key coursework: Computer Organization, Software Engineering, Java, Operating Systems, Discrete Mathematics',
    tl_0_d3: 'Google Developer Student Club (GDSC) member',
    tl_0_d4: 'IELTS Reading 8.0 — proficient in English academic and financial materials',
    tl_1_title: 'SZ-HK Premium Lecture & Event Sharing Community',
    tl_1_preview: 'Founded SZ-HK Premium Lecture & Event Sharing Community (~500 members). Commissioned to organize GBA × Johor-Singapore SEZ youth exchange. Completed SYSU Industrial Finance program.',
    tl_1_detail_label: 'Key Achievements',
    tl_1_d1: 'Founded SZ-HK Premium Lecture & Event Sharing Community — ~500 general members, ~100 premium users',
    tl_1_d2: 'Content partnerships with HKU Business School, PKU HSBC Business School, and Great Bay University',
    tl_1_d3: 'Commissioned by former Singaporean trade official for GBA × Johor-Singapore SEZ youth exchange',
    tl_1_d4: 'Completed SYSU-Shenzhen Advanced Research Program on Industrial Finance',
    tl_2_title: 'Investment Assistant · 海坤投资管理',
    tl_2_preview: 'Global market intelligence (Bloomberg/SCMP), AI/SaaS chuhai project screening, financial data analysis with Excel.',
    tl_2_detail_label: 'Key Responsibilities',
    tl_2_d1: 'Global market intelligence gathering via Bloomberg, SCMP, and financial databases',
    tl_2_d2: 'AI and SaaS chuhai project screening and preliminary due diligence',
    tl_2_d3: 'Financial data analysis and modeling using Excel',
    tl_2_d4: 'Investment memo preparation for the investment committee',
    tl_3_title: 'HR Specialist · 才多对信息技术',
    tl_3_preview: 'Full-channel recruitment (BOSS直聘/猎聘/智联), 20-30 phone screens/day, 10-15 structured interviews/week, recruitment funnel optimization.',
    tl_3_detail_label: 'Key Metrics',
    tl_3_d1: '20-30 phone screens per day across multiple recruitment channels',
    tl_3_d2: '10-15 structured interviews per week',
    tl_3_d3: 'Full-channel recruitment: BOSS直聘, 猎聘, 智联',
    tl_3_d4: 'Recruitment funnel optimization and candidate pipeline management',
    tl_4_title: 'Interviewed U.S. Treasury Secretary Bessent',
    tl_4_preview: 'On-site in Kuala Lumpur during U.S.-China trade talks. Captured and published exclusive footage and key diplomatic moments.',
    tl_4_detail_label: 'Details',
    tl_4_d1: "On-the-ground coverage of U.S.-China trade negotiations in Kuala Lumpur",
    tl_4_d2: "Captured exclusive footage of Secretary Bessent's remarks",
    tl_4_d3: 'Published content on Xiaohongshu, generating 100+ engagements',
    tl_4_d4: 'Demonstrated ability to operate in high-stakes diplomatic environments',
    tl_5_title: 'Executive Assistant to GM · 道深投资控股',
    tl_5_preview: 'Cross-border IPO advisory, executive-level liaison with Malaysian listed companies, roadshow strategy, and full-cycle client onboarding support.',
    tl_5_detail_label: 'Key Responsibilities',
    tl_5_d1: 'Cross-border IPO advisory for companies seeking dual listing between China and Malaysia',
    tl_5_d2: 'Executive-level liaison with Malaysian listed companies and regulatory bodies',
    tl_5_d3: 'Roadshow strategy development and investor presentation preparation',
    tl_5_d4: 'Full-cycle client onboarding — from initial contact to engagement letter',
    tl_6_title: 'AI Product Intern · Asia-Pacific AI Association',
    tl_6_preview: 'AI product development and research at the Asia-Pacific Artificial Intelligence Association.',
    tl_6_detail_label: 'Key Responsibilities',
    tl_6_d1: 'AI product development and research support',
    tl_6_d2: 'Cross-functional collaboration with product and engineering teams',
    tl_6_d3: 'Market research and competitive analysis in AI industry',
    contact_label: 'Contact',
    contact_title: 'Get in Touch',
    contact_desc: "Whether you have a project idea, an opportunity, or just want to say hi — I'd love to hear from you.",
    contact_email_label: 'Email',
    contact_location_label: 'Location',
    contact_location: 'Shenzhen, China',
    contact_phone_label: 'Phone',
    contact_resume_label: 'Resume',
    contact_resume_btn: 'Download Resume',
    form_name_placeholder: 'Your name',
    form_email_placeholder: 'Your email',
    form_subject_placeholder: 'Subject',
    form_message_placeholder: 'What would you like to say?',
    form_submit: 'Send Message',
    resume_modal_title: 'Chen Songtao — Resume',
    resume_modal_desc: 'PDF preview is not available in-browser. Click below to download.',
    resume_modal_btn: 'Download Resume',
    success_title: 'Message Sent!',
    success_desc: "Thanks for reaching out. I'll get back to you within 24 hours.",
    success_btn: 'Got it',
    toast_required: 'Please fill in all required fields.',
    toast_email: 'Please enter a valid email address.',
    toast_fix: 'Please fix the errors before submitting.'
  },

  zh: {
    site_title: '陈松涛 · 作品集',
    nav_about: '关于',
    nav_projects: '项目',
    nav_experience: '经历',
    nav_contact: '联系',
    hero_desc: '在科技、金融与全球市场的交汇处构建。计算机科学专业 · GDSC · IELTS Reading 8.0 · 坐标深圳。',
    hero_meta_location: '深圳',
    hero_meta_reading: '阅读 Bloomberg / SCMP',
    hero_meta_building: '运营深圳-香港讲座会议分享社群',
    hero_card_role: '科技 · 金融 · 全球市场',
    hero_stat_community: '羽毛球',
    hero_stat_report: '探索',
    hero_btn_projects: '查看项目',
    hero_btn_contact: '联系我',
    about_label: '关于',
    about_title: '我是谁',
    about_desc: '一个连接科技、金融与国际关系的计算机学生。',
    about_p1: '我是一名 21 岁的计算机科学专业学生（班级前 20%），base 深圳。发起并运营深圳-香港高端讲座会议分享社群（约500人）。曾采访美国财政部长贝森特，参与跨境 IPO 咨询。',
    about_p2: '我每天阅读 Bloomberg 和 SCMP，关注 AI 和 SaaS 出海趋势，擅长在科技、金融和国际政策的交叉点上工作。我是 Google 开发者学生俱乐部成员，IELTS 阅读 8.0，相信最好的机会往往在学科的交叉处。',
    highlight_1_label: '喜欢打羽毛球',
    highlight_2_label: '喜欢探索',
    projects_label: '项目',
    projects_title: '精选作品',
    projects_desc: '社区、媒体与研究领域的项目。',
    filter_all: '全部',
    filter_community: '社群',
    filter_research: '研究',
    filter_media: '媒体',
    view_details: '查看详情',
    proj_0_title: '深圳-香港高端讲座会议分享社群',
    proj_0_desc: '发起并运营高质量讲座会议分享社群，聚焦金融、AI、商业出海、人文社科等主题。普通成员约500人，高端垂直用户约100人。与香港大学商学院、北京大学汇丰商学院、大湾区大学等高校建立内容合作。',
    proj_0_tag1: '社群运营',
    proj_0_tag2: '内容筛选',
    proj_0_tag3: '用户分层',
    proj_1_title: '采访美国财政部长贝森特',
    proj_1_desc: '2025 年 10 月在吉隆坡中美贸易谈判期间采访财政部长 Scott Bessent。拍摄现场独家画面和关键外交时刻，发布在小红书获得 100+ 互动。',
    proj_1_tag1: '国际报道',
    proj_1_tag2: '现场采访',
    proj_1_tag3: '内容策略',
    proj_2_title: '东盟-港交所研究报告',
    proj_2_desc: '筛选 2,600 家港股上市公司 → 23 家东盟关联 → 深度分析 4 家。产出 30+ 页报告，涵盖宏观分析、估值建模（PE/PB）和跨境风险评估框架。',
    proj_2_tag1: '财务分析',
    proj_2_tag2: '估值建模',
    proj_2_tag3: '风险框架',
    proj_3_title: '大湾区 × 柔新经济特区交流',
    proj_3_desc: '受新加坡前贸易官员委托，策划并执行大湾区与柔佛-新加坡经济特区之间的青年交流项目，协调跨境多方利益相关方与资源。',
    proj_3_tag1: '跨境协调',
    proj_3_tag2: '活动策划',
    proj_3_tag3: '国际关系',
    proj_4_title: '东盟经济论坛',
    proj_4_desc: '参与高级别东盟经济论坛及马来西亚年度经济论坛，与马来西亚总理及多位内阁部长就政策与经济前景进行交流。',
    proj_4_tag1: '政策分析',
    proj_4_tag2: '经济论坛',
    proj_4_tag3: '全球事务',
    proj_5_title: '产业金融研究项目',
    proj_5_desc: '完成中山大学深圳研究院产业金融高级研修项目（2025 年 8 月），深入理解产业政策、金融市场与经济趋势。',
    proj_5_tag1: '产业金融',
    proj_5_tag2: '政策研究',
    proj_5_tag3: '高管教育',
    exp_label: '经历',
    exp_title: '时间线',
    exp_desc: '投资、金融与人力资源领域的实习与研究经历。',
    tl_0_title: '计算机科学 本科',
    tl_0_preview: '班级前 20%。核心课程：计算机组成、软件工程、Java、操作系统、离散数学。GDSC 成员。',
    tl_0_detail_label: '学术亮点',
    tl_0_d1: '计算机科学专业排名前 20%',
    tl_0_d2: '核心课程：计算机组成、软件工程、Java、操作系统、离散数学',
    tl_0_d3: 'Google 开发者学生俱乐部（GDSC）成员',
    tl_0_d4: 'IELTS 阅读 8.0 — 熟练阅读英文金融与学术材料',
    tl_1_title: '深圳-香港高端讲座会议分享社群',
    tl_1_preview: '发起并运营深圳-香港高端讲座会议分享社群（约500人）。受委托组织大湾区 × 柔新经济特区青年交流。完成中山大学产业金融项目。',
    tl_1_detail_label: '关键成就',
    tl_1_d1: '发起并运营深圳-香港高端讲座会议分享社群 — 普通成员约500人，高端垂直用户约100人',
    tl_1_d2: '与香港大学商学院、北京大学汇丰商学院、大湾区大学等高校建立内容合作',
    tl_1_d3: '受新加坡前贸易官员委托，组织大湾区 × 柔新经济特区青年交流',
    tl_1_d4: '完成中山大学深圳研究院产业金融高级研修项目',
    tl_2_title: '投资助理 · 海坤投资管理',
    tl_2_preview: '全球市场情报（Bloomberg/SCMP），AI/SaaS 出海项目筛选，Excel 财务数据分析。',
    tl_2_detail_label: '主要职责',
    tl_2_d1: '通过 Bloomberg、SCMP 和金融数据库收集全球市场情报',
    tl_2_d2: 'AI 和 SaaS 出海项目筛选与初步尽职调查',
    tl_2_d3: '使用 Excel 进行财务数据分析与建模',
    tl_2_d4: '为投资委员会准备投资备忘录',
    tl_3_title: '人力资源专员 · 才多对信息技术',
    tl_3_preview: '全渠道招聘（BOSS直聘/猎聘/智联），每天 20-30 通电话初筛，每周 10-15 场结构化面试，招聘漏斗优化。',
    tl_3_detail_label: '关键数据',
    tl_3_d1: '每天 20-30 通电话初筛，覆盖多个招聘渠道',
    tl_3_d2: '每周 10-15 场结构化面试',
    tl_3_d3: '全渠道招聘：BOSS直聘、猎聘、智联',
    tl_3_d4: '招聘漏斗优化与候选人 pipeline 管理',
    tl_4_title: '采访美国财政部长贝森特',
    tl_4_preview: '在吉隆坡中美贸易谈判期间现场报道，拍摄并发布独家画面和关键外交时刻。',
    tl_4_detail_label: '详情',
    tl_4_d1: '在吉隆坡现场报道中美贸易谈判',
    tl_4_d2: '拍摄 Bessent 财长的独家讲话画面',
    tl_4_d3: '在小红书发布内容，获得 100+ 互动',
    tl_4_d4: '展现在高风险外交环境中的工作能力',
    tl_5_title: '总经理业务助理 · 道深投资控股',
    tl_5_preview: '跨境 IPO 咨询，与马来西亚上市公司高管层对接，路演策略制定，全周期客户入驻支持。',
    tl_5_detail_label: '主要职责',
    tl_5_d1: '为中马两地寻求双重上市的企业提供跨境 IPO 咨询',
    tl_5_d2: '与马来西亚上市公司及监管机构进行高管层对接',
    tl_5_d3: '路演策略制定与投资者演示材料准备',
    tl_5_d4: '全周期客户入驻 — 从初次接触到签约',
    tl_6_title: 'AI 产品实习生 · 亚太人工智能协会',
    tl_6_preview: '在亚太人工智能协会从事 AI 产品开发与研究。',
    tl_6_detail_label: '主要职责',
    tl_6_d1: 'AI 产品开发与研究支持',
    tl_6_d2: '与产品和工程团队的跨职能协作',
    tl_6_d3: 'AI 行业市场调研与竞品分析',
    contact_label: '联系',
    contact_title: '取得联系',
    contact_desc: '无论你有项目想法、合作机会，还是只是想打个招呼 — 我都很乐意收到你的消息。',
    contact_email_label: '邮箱',
    contact_location_label: '位置',
    contact_location: '中国 深圳',
    contact_phone_label: '电话',
    contact_resume_label: '简历',
    contact_resume_btn: '下载简历',
    form_name_placeholder: '你的姓名',
    form_email_placeholder: '你的邮箱',
    form_subject_placeholder: '主题',
    form_message_placeholder: '你想说什么？',
    form_submit: '发送消息',
    resume_modal_title: '陈松涛 — 简历',
    resume_modal_desc: '浏览器无法直接预览 PDF，请点击下方按钮下载。',
    resume_modal_btn: '下载简历',
    success_title: '消息已发送！',
    success_desc: '感谢你的联系。我会在 24 小时内回复。',
    success_btn: '好的',
    toast_required: '请填写所有必填字段。',
    toast_email: '请输入有效的邮箱地址。',
    toast_fix: '请先修正错误再提交。'
  }
};

// ==========================================
// PROJECT DATA (bilingual)
// ==========================================
const projectData = [
  {
    icon: 'fa-globe-asia',
    category: 'Community',
    en: {
      title: 'SZ-HK Premium Lecture & Event Sharing Community',
      problem: 'High-growth professionals in the Greater Bay Area lacked a curated channel for quality lectures, conferences, and industry events across finance, AI, business globalization, and humanities.',
      solution: 'Founded and operated a curated community focused on sourcing, filtering, and distributing high-quality lecture and event information. Built a tiered user system (~500 general members, ~100 premium vertical users). Established content partnerships with HKU Business School, Peking University HSBC Business School, and Great Bay University.',
      result: 'Scaled to ~500 general members and ~100 premium users. Organized online/offline networking events connecting professionals across finance, tech, entrepreneurship, and cross-border business. Incubated the GBA Overseas IP Community through one-on-one deep conversations with dozens of practitioners and entrepreneurs.',
      tech: ['Community Operations', 'Content Curation', 'User Tiering', 'Cross-border Networking']
    },
    zh: {
      title: '深圳-香港高端讲座会议分享社群',
      problem: '大湾区高成长人群缺乏一个经过筛选的高质量讲座、会议和行业活动信息渠道，涵盖金融、AI、商业出海、人文社科等主题。',
      solution: '发起并运营高质量讲座会议分享社群，进行内容筛选、活动组织与资源链接。搭建内容运营与用户分层体系（普通成员约500人，高端垂直用户约100人）。与香港大学商学院、北京大学汇丰商学院、大湾区大学等高校建立内容合作。',
      result: '累计普通成员约500人，高端垂直用户约100人。组织线上/线下交流活动，促进金融、科技、创业、出海等背景成员之间的认知交流与资源互通。孵化"大湾区出海IP社群"，与数十位出海方向从业者、创业者及服务商进行一对一深度沟通，沉淀出海资源网络。',
      tech: ['社群运营', '内容筛选', '用户分层', '跨境资源链接']
    }
  },
  {
    icon: 'fa-microphone',
    category: 'Media',
    en: {
      title: 'Interviewed U.S. Treasury Secretary',
      problem: 'During the U.S.-China trade talks in October 2025, there was limited on-the-ground coverage from independent content creators capturing the diplomatic atmosphere and key moments.',
      solution: 'Traveled to Kuala Lumpur, secured on-site access, and conducted coverage of Secretary Scott Bessent\'s remarks and the broader diplomatic environment.',
      result: 'Captured exclusive footage and key diplomatic moments. Published on Xiaohongshu, generating 100+ engagements and establishing credibility in international political coverage.',
      tech: ['International Reporting', 'On-site Coverage', 'Content Strategy', 'Diplomatic Affairs']
    },
    zh: {
      title: '采访美国财政部长贝森特',
      problem: '2025 年 10 月中美贸易谈判期间，独立内容创作者对现场外交氛围和关键时刻的报道有限。',
      solution: '前往吉隆坡，获取现场准入，对财政部长 Scott Bessent 的讲话及更广泛的外交环境进行报道。',
      result: '拍摄独家画面和关键外交时刻，在小红书发布获得 100+ 互动，建立了国际政治报道的可信度。',
      tech: ['国际报道', '现场采访', '内容策略', '外交事务']
    }
  },
  {
    icon: 'fa-file-alt',
    category: 'Research',
    en: {
      title: 'ASEAN-HKEX Research Report',
      problem: 'Investors lacked a systematic framework for identifying and evaluating ASEAN-linked companies listed on the Hong Kong Stock Exchange, missing cross-border investment opportunities.',
      solution: 'Screened all 2,600 HK-listed companies, identified 23 with significant ASEAN exposure, and conducted deep-dive analysis on 4 representative firms using PE/PB valuation models.',
      result: 'Produced a 30+ page comprehensive report covering macro analysis, valuation modeling, and a proprietary cross-border risk assessment framework.',
      tech: ['Financial Analysis', 'Valuation Modeling', 'Risk Framework', 'HKEX Screening']
    },
    zh: {
      title: '东盟-港交所研究报告',
      problem: '投资者缺乏系统性的框架来识别和评估在香港交易所上市的东盟关联公司，错失跨境投资机会。',
      solution: '筛选全部 2,600 家港股上市公司，识别出 23 家具有显著东盟业务的公司，使用 PE/PB 估值模型对 4 家代表企业进行深度分析。',
      result: '产出 30+ 页综合报告，涵盖宏观分析、估值建模和专有跨境风险评估框架。',
      tech: ['财务分析', '估值建模', '风险框架', '港交所筛选']
    }
  },
  {
    icon: 'fa-handshake',
    category: 'Community',
    en: {
      title: 'GBA × Johor-Singapore SEZ Exchange',
      problem: 'The newly established Johor-Singapore Special Economic Zone lacked youth-focused exchange programs that could bridge talent and business communities between the SEZ and the Greater Bay Area.',
      solution: 'Commissioned by a former Singaporean trade official to design and execute a cross-border youth exchange program, coordinating stakeholders across government, business, and academia.',
      result: 'Successfully planned and initiated a structured exchange program connecting young professionals and entrepreneurs between the GBA and Johor-Singapore SEZ.',
      tech: ['Cross-border Coordination', 'Event Planning', 'International Relations', 'Stakeholder Management']
    },
    zh: {
      title: '大湾区 × 柔新经济特区交流',
      problem: '新成立的柔佛-新加坡经济特区缺乏面向青年的交流项目，无法连接特区和粤港澳大湾区的人才与商业社群。',
      solution: '受新加坡前贸易官员委托，设计并执行跨境青年交流项目，协调政府、企业和学术界的多方利益相关者。',
      result: '成功策划并启动结构化交流项目，连接大湾区与柔新经济特区的青年专业人士和创业者。',
      tech: ['跨境协调', '活动策划', '国际关系', '利益相关方管理']
    }
  },
  {
    icon: 'fa-newspaper',
    category: 'Media',
    en: {
      title: 'ASEAN Economic Forums',
      problem: 'High-level ASEAN economic policy discussions often lack representation from young voices, creating a gap between policy-making and the next generation of business leaders.',
      solution: 'Participated in the Malaysia Annual Economic Forum and multiple ASEAN economic forums, engaging directly with the Prime Minister of Malaysia and cabinet ministers.',
      result: 'Gained first-hand exposure to regional economic policy-making, built a network of high-level contacts, and developed a nuanced understanding of ASEAN economic dynamics.',
      tech: ['Policy Analysis', 'Economic Forums', 'Global Affairs', 'Networking']
    },
    zh: {
      title: '东盟经济论坛',
      problem: '高级别东盟经济政策讨论往往缺乏青年声音的代表，在政策制定与下一代商业领袖之间形成鸿沟。',
      solution: '参与马来西亚年度经济论坛及多个东盟经济论坛，与马来西亚总理及多位内阁部长直接交流。',
      result: '获得区域经济政策制定的第一手经验，建立高层人脉网络，形成对东盟经济动态的深入理解。',
      tech: ['政策分析', '经济论坛', '全球事务', '人脉拓展']
    }
  },
  {
    icon: 'fa-graduation-cap',
    category: 'Research',
    en: {
      title: 'Industrial Finance Research Program',
      problem: 'Understanding the intersection of industrial policy and financial markets requires specialized knowledge that traditional CS curricula do not cover.',
      solution: 'Completed the SYSU-Shenzhen Advanced Research Program on Industrial Finance (Aug 2025), an intensive executive education program covering industrial policy, financial markets, and economic trends.',
      result: 'Deepened understanding of how industrial policy shapes financial markets, and how technology companies can navigate the intersection of policy, finance, and innovation.',
      tech: ['Industrial Finance', 'Policy Research', 'Executive Education', 'Economic Analysis']
    },
    zh: {
      title: '产业金融研究项目',
      problem: '理解产业政策与金融市场的交叉需要传统计算机课程未涵盖的专业知识。',
      solution: '完成中山大学深圳研究院产业金融高级研修项目（2025 年 8 月），涵盖产业政策、金融市场和经济趋势。',
      result: '深入理解产业政策如何塑造金融市场，以及科技公司如何在政策、金融和创新的交叉点上航行。',
      tech: ['产业金融', '政策研究', '高管教育', '经济分析']
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // I18N — Language Switching
  // ==========================================
  let currentLang = localStorage.getItem('lang') || 'en';
  const langToggle = document.getElementById('langToggle');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    langToggle.textContent = lang === 'en' ? '中' : 'EN';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang][key]) {
        el.placeholder = i18n[lang][key];
      }
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  }

  applyLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'zh' : 'en';
    applyLanguage(next);
  });

  // ==========================================
  // THEME
  // ==========================================
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.classList.add('theme-transitioning');
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    setTimeout(() => { html.classList.remove('theme-transitioning'); }, 500);
  });

  // ==========================================
  // MOBILE MENU
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ==========================================
  // NAVBAR SCROLL
  // ==========================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });
  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================
  // SCROLL REVEAL
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal, .timeline-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('timeline-item')) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => { entry.target.classList.add('visible'); }, delay);
        } else {
          entry.target.classList.add('visible');
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // PROJECT FILTER (Multi-select)
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  let activeFilters = new Set();
  activeFilters.add('all');

  function applyFilters() {
    const hasAll = activeFilters.has('all');
    projects.forEach(project => {
      const category = project.getAttribute('data-category');
      if (hasAll) {
        if (project.classList.contains('hidden') || project.classList.contains('fading-out')) {
          project.classList.remove('hidden', 'fading-out');
          project.classList.add('fading-in');
          void project.offsetWidth;
          project.classList.add('visible');
          setTimeout(() => project.classList.remove('fading-in'), 450);
        }
      } else {
        if (activeFilters.has(category)) {
          if (project.classList.contains('hidden') || project.classList.contains('fading-out')) {
            project.classList.remove('hidden', 'fading-out');
            project.classList.add('fading-in');
            void project.offsetWidth;
            project.classList.add('visible');
            setTimeout(() => project.classList.remove('fading-in'), 450);
          }
        } else {
          if (!project.classList.contains('hidden') && !project.classList.contains('fading-out')) {
            project.classList.add('fading-out');
            setTimeout(() => { project.classList.add('hidden'); project.classList.remove('fading-out'); }, 350);
          }
        }
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        activeFilters.clear();
        activeFilters.add('all');
        filterBtns.forEach(b => { b.classList.remove('active', 'multi-active'); });
        btn.classList.add('active');
      } else {
        activeFilters.delete('all');
        filterBtns.forEach(b => b.classList.remove('active'));
        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
          btn.classList.remove('multi-active');
        } else {
          activeFilters.add(filter);
          btn.classList.add('multi-active');
        }
        if (activeFilters.size === 0) {
          activeFilters.add('all');
          filterBtns.forEach(b => { b.classList.remove('active', 'multi-active'); });
          document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        }
      }
      applyFilters();
    });
  });

  // ==========================================
  // PROJECT MODAL
  // ==========================================
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const body = document.body;

  function openModal(index) {
    const data = projectData[index];
    const lang = currentLang;
    const content = data[lang];
    modalBody.innerHTML = `
      <div class="modal-icon"><i class="fas ${data.icon}"></i></div>
      <h2 class="modal-title">${content.title}</h2>
      <div class="modal-section">
        <h4>${lang === 'en' ? 'Problem' : '问题'}</h4>
        <p>${content.problem}</p>
      </div>
      <div class="modal-section">
        <h4>${lang === 'en' ? 'Solution' : '方案'}</h4>
        <p>${content.solution}</p>
      </div>
      <div class="modal-section">
        <h4>${lang === 'en' ? 'Result' : '成果'}</h4>
        <p>${content.result}</p>
      </div>
      <div class="modal-tech">
        ${content.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
    `;
    modal.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    body.style.overflow = '';
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-project'));
      openModal(idx);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  // ==========================================
  // TIMELINE EXPAND
  // ==========================================
  document.querySelectorAll('.timeline-card[data-expandable]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  // ==========================================
  // CONTACT FORM
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successOverlay = document.getElementById('successOverlay');
  const successClose = document.getElementById('successClose');

  function showError(input, message) {
    const group = input.closest('.form-group');
    const error = group.querySelector('.form-error');
    input.classList.add('error');
    error.textContent = message;
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    const error = group.querySelector('.form-error');
    input.classList.remove('error');
    error.textContent = '';
  }

  contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) clearError(input);
    });
    input.addEventListener('blur', () => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        showError(input, i18n[currentLang].toast_required);
      }
      if (input.type === 'email' && input.value.trim()) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(input.value.trim())) {
          showError(input, i18n[currentLang].toast_email);
        }
      }
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    contactForm.querySelectorAll('[required]').forEach(input => {
      if (!input.value.trim()) {
        showError(input, i18n[currentLang].toast_required);
        valid = false;
      }
    });

    const email = contactForm.querySelector('#email');
    if (email.value.trim()) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.value.trim())) {
        showError(email, i18n[currentLang].toast_email);
        valid = false;
      }
    }

    if (!valid) return;

    submitBtn.classList.add('loading');
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      contactForm.reset();
      successOverlay.classList.add('active');
      body.style.overflow = 'hidden';
    }, 1500);
  });

  successClose.addEventListener('click', () => {
    successOverlay.classList.remove('active');
    body.style.overflow = '';
  });
  successOverlay.addEventListener('click', (e) => {
    if (e.target === successOverlay) {
      successOverlay.classList.remove('active');
      body.style.overflow = '';
    }
  });

  // ==========================================
  // RESUME MODAL
  // ==========================================
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeModal = document.getElementById('resumeModal');
  const resumeModalClose = document.getElementById('resumeModalClose');

  resumeBtn.addEventListener('click', () => {
    resumeModal.classList.add('active');
    body.style.overflow = 'hidden';
  });

  resumeModalClose.addEventListener('click', () => {
    resumeModal.classList.remove('active');
    body.style.overflow = '';
  });

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('active');
      body.style.overflow = '';
    }
  });

  // ==========================================
  // GLOBAL ESCAPE HANDLER — closes any open modal/overlay
  // ==========================================
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    // Project modal
    if (modal.classList.contains('active')) {
      closeModal();
      return;
    }
    // Success overlay
    if (successOverlay.classList.contains('active')) {
      successOverlay.classList.remove('active');
      body.style.overflow = '';
      return;
    }
    // Resume modal
    if (resumeModal.classList.contains('active')) {
      resumeModal.classList.remove('active');
      body.style.overflow = '';
    }
  });

});
