(function ($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        t = 'transform',
        x2 = '4.0.1.365',
        c = 'color',
        x3 = 'rgba(0,0,0,0)',
        x1 = '4.0.1',
        r = 'deg',
        b = 'block',
        rtl = 'border-top-left-radius',
        a = 'Base State',
        x11 = '@@0@@px @@1@@px',
        x15 = 'hidden',
        dt = 'Default Timeline',
        e18 = '${_photo_1}',
        e20 = '${_photo_5}',
        i = 'none',
        e16 = '${_btnBack}',
        p = 'px',
        x12 = 'pointer',
        lf = 'left',
        x13 = 'rgba(0,0,0,1.00)',
        rbl = 'border-bottom-left-radius',
        s = 'style',
        e21 = '${_btnNext}',
        rz = 'rotateZ',
        e17 = '${_photo_4}',
        o = 'opacity',
        bg = 'background-color',
        qq = 'easeInOutQuad',
        d = 'display',
        rbr = 'border-bottom-right-radius',
        g = 'image',
        h = 'height',
        rtr = 'border-top-right-radius',
        w = 'width',
        tp = 'top',
        e19 = '${_photo_3}',
        ql = 'linear',
        ov = 'overflow',
        e14 = '${_Stage}',
        x10 = 'stage',
        e22 = '${_photo_2}';
    var im = 'images/';
    var g4 = 'photo_1.jpg',
        g9 = 'arrow.png',
        g8 = 'photo_5.jpg',
        g7 = 'photo_4.jpg',
        g5 = 'photo_2.jpg',
        g6 = 'photo_3.jpg';
    var fonts = {};
    var P = Edge.P,
        T = Edge.T,
        A = Edge.A;
    var opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    };
    var resources = [];
    var symbols = {
        "stage": {
            v: x1,
            mv: x1,
            b: x2,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: 'photo_1',
                    t: g,
                    r: ['0%', '0', '100%', '106.8%', 'auto', 'auto'],
                    f: [x3, im + g4, '0px', '0px']
                }, {
                    id: 'photo_2',
                    v: i,
                    t: g,
                    r: ['0%', '0', '100%', '100%', 'auto', 'auto'],
                    f: [x3, im + g5, '0px', '0px']
                }, {
                    id: 'photo_3',
                    v: i,
                    t: g,
                    r: ['100%', '0', '100%', '114.8%', 'auto', 'auto'],
                    f: [x3, im + g6, '0px', '0px']
                }, {
                    id: 'photo_4',
                    v: i,
                    t: g,
                    r: ['100%', '0', '100%', '100%', 'auto', 'auto'],
                    f: [x3, im + g7, '0px', '0px']
                }, {
                    id: 'photo_5',
                    v: i,
                    t: g,
                    r: ['100%', '0', '100%', '100%', 'auto', 'auto'],
                    f: [x3, im + g8, '0px', '0px']
                }, {
                    id: 'btnNext',
                    v: b,
                    t: g,
                    r: ['94.8%', '39%', '35px', '35px', 'auto', 'auto'],
                    cu: ['pointer'],
                    br: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                    f: [x3, im + g9, '0px', '0px'],
                    boxShadow: ["", 3, 3, 10, 0, "rgba(0,0,0,1.00)"]
                }, {
                    id: 'btnBack',
                    v: i,
                    t: g,
                    r: ['1.3%', '39%', '35px', '35px', 'auto', 'auto'],
                    cu: ['pointer'],
                    br: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                    f: [x3, im + g9, '0px', '0px'],
                    boxShadow: ["", -3, -3, 10, 0, "rgba(0,0,0,1.00)"],
                    tf: [[], ['180']]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 5000,
                    a: n,
                    tt: []
                }
            }
        }
    };
    var S1 = symbols[x10];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {},
        A1 = A(_, tl0, st1);
    A1.A(e14).P(bg, x13, c).P(w, 100, _, _, "%").P(h, 100).P(ov, x15);
    A1.A(e16).P(rtl, [57, 57], _, x11).P("boxShadow.blur", 10, "subproperty").P(rbr, [57, 57], _, x11).P("cursor", x12).P(rtr, [57, 57], _, x11).P(tp, 39, _, _, "%").P(rbl, [57, 57], _, x11).P("boxShadow.color", x13, "subproperty").P(rz, 180, t, _, r).P("boxShadow.offsetV", -3, "subproperty", _, p).P("boxShadow.offsetH", -3, "subproperty").P(d, i).T(1, b).P(o, 0.5, _, _, "").T(1.803, 0.5).P(lf, 5.78, _, _, "%").T(1.803, 5.78);
    A1.A(e17).P(d, i).T(2, b).P(o, 0, _, _, "").T(2, 1, 1, qq).T(3, 0, 1).P(lf, 100, _, _, "%").T(2, 0, 1).T(3, -100, 1);
    A1.A(e18).P(lf, 0, _, _, "%").T(0, -100, 1, qq).P(o, 1, _, _, "").T(0, 0, 1);
    A1.A(e19).P(d, i).T(1, b).P(o, 0, _, _, "").T(1, 1, 1, qq).T(2, 0, 1).P(lf, 100, _, _, "%").T(1, 0, 1).T(2, -100, 1);
    A1.A(e20).P(d, i).T(3, b).P(o, 0, _, _, "").T(3, 1, 1, qq).T(4, 0, 1).P(lf, 100, _, _, "%").T(3, 0, 1).T(4, -100, 1);
    A1.A(e21).P(rtl, [57, 57], _, x11).P("boxShadow.blur", 10, "subproperty").P(rbr, [57, 57], _, x11).P(tp, 39, _, _, "%").P(rbl, [57, 57], _, x11).P(rtr, [57, 57], _, x11).P("boxShadow.color", x13, "subproperty").P("boxShadow.offsetV", 3, "subproperty", _, p).P("boxShadow.offsetH", 3, "subproperty").P("cursor", x12).P(d, b).T(4, i).P(o, 0.5, _, _, "").T(1.803, 0.5).P(lf, 90.33, _, _, "%").T(1.803, 90.33);
    A1.A(e22).P(d, i).T(0, b).P(o, 0, _, _, "").T(0, 1, 1, qq).T(1, 0, 1).P(lf, 100, _, _, "%").T(0, 0, 1).T(1, -100, 1);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function () {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "EDGE-1396734290");