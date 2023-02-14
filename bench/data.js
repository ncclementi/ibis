window.BENCHMARK_DATA = {
  "lastUpdate": 1676388413593,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "0e092200adc50cfe9feb16abdbbb1d1e9d453509",
          "message": "fix(duckdb): workaround duckdb bug that prevents multiple substitutions",
          "timestamp": "2023-02-14T10:20:22-05:00",
          "tree_id": "523170b2d498afba6173a2168842f21a789da64c",
          "url": "https://github.com/ibis-project/ibis/commit/0e092200adc50cfe9feb16abdbbb1d1e9d453509"
        },
        "date": 1676388328942,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 94.5883362997325,
            "unit": "iter/sec",
            "range": "stddev: 0.0063548417283462175",
            "extra": "mean: 10.572128014083994 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8938.49755030794,
            "unit": "iter/sec",
            "range": "stddev: 0.000019878908826773707",
            "extra": "mean: 111.87562499981318 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.40508772188444,
            "unit": "iter/sec",
            "range": "stddev: 0.0015556155540221786",
            "extra": "mean: 34.007720346154926 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 160.47485187513345,
            "unit": "iter/sec",
            "range": "stddev: 0.006156334753676338",
            "extra": "mean: 6.231505985611419 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 51792.31157806413,
            "unit": "iter/sec",
            "range": "stddev: 0.00003570041753629763",
            "extra": "mean: 19.30788508044764 usec\nrounds: 11495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.60377889714051,
            "unit": "iter/sec",
            "range": "stddev: 0.0011749121523400557",
            "extra": "mean: 13.773387765624756 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6239377008288549,
            "unit": "iter/sec",
            "range": "stddev: 0.008099205326498516",
            "extra": "mean: 1.6027241160000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.476081378677264,
            "unit": "iter/sec",
            "range": "stddev: 0.0017369912909639758",
            "extra": "mean: 21.51644395000112 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.28738158514912,
            "unit": "iter/sec",
            "range": "stddev: 0.0006621406118857765",
            "extra": "mean: 14.227304779998917 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.618712259708377,
            "unit": "iter/sec",
            "range": "stddev: 0.015317935279799112",
            "extra": "mean: 1.6162601989999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3208.2703149040535,
            "unit": "iter/sec",
            "range": "stddev: 0.00006400498515278546",
            "extra": "mean: 311.69443402399406 usec\nrounds: 1834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 117.03854470913103,
            "unit": "iter/sec",
            "range": "stddev: 0.006830352714577789",
            "extra": "mean: 8.544193731092955 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.38736081778045,
            "unit": "iter/sec",
            "range": "stddev: 0.0023194416223802808",
            "extra": "mean: 32.90841893103377 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3676.722695094541,
            "unit": "iter/sec",
            "range": "stddev: 0.0001102058672691663",
            "extra": "mean: 271.98134940505395 usec\nrounds: 1597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5325330484053458,
            "unit": "iter/sec",
            "range": "stddev: 0.052551177227503236",
            "extra": "mean: 1.8778177298000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 633.263093901727,
            "unit": "iter/sec",
            "range": "stddev: 0.006368095359954625",
            "extra": "mean: 1.5791225000002687 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.27482930594388,
            "unit": "iter/sec",
            "range": "stddev: 0.000278882741574148",
            "extra": "mean: 7.857013090908926 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 121.21930706530107,
            "unit": "iter/sec",
            "range": "stddev: 0.0008639177078290157",
            "extra": "mean: 8.24951094186092 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1253.0824851346015,
            "unit": "iter/sec",
            "range": "stddev: 0.00009984013295255038",
            "extra": "mean: 798.0320624245128 usec\nrounds: 833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.0326469032224,
            "unit": "iter/sec",
            "range": "stddev: 0.0020918937277610438",
            "extra": "mean: 14.078033743588891 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 129.6927776004017,
            "unit": "iter/sec",
            "range": "stddev: 0.0008402494579607522",
            "extra": "mean: 7.710529595419063 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 129.9467290216593,
            "unit": "iter/sec",
            "range": "stddev: 0.0008673389630211392",
            "extra": "mean: 7.69546111340226 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 188.16117918975834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006677220806219168",
            "extra": "mean: 5.314592544041785 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.104486598492098,
            "unit": "iter/sec",
            "range": "stddev: 0.02447927822493812",
            "extra": "mean: 34.35896375000169 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 132.6290540414402,
            "unit": "iter/sec",
            "range": "stddev: 0.000826212128313652",
            "extra": "mean: 7.539826075269661 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.44308050678119,
            "unit": "iter/sec",
            "range": "stddev: 0.0008283920178445288",
            "extra": "mean: 15.28045428571139 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.077636000392164,
            "unit": "iter/sec",
            "range": "stddev: 0.006359025148699994",
            "extra": "mean: 141.29011437499628 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1777525.0827134058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011051590832769342",
            "extra": "mean: 562.5799656643338 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.28276225149867,
            "unit": "iter/sec",
            "range": "stddev: 0.0017701190669357106",
            "extra": "mean: 27.56129737500057 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3784.079624241767,
            "unit": "iter/sec",
            "range": "stddev: 0.00010597357163913792",
            "extra": "mean: 264.2650523508406 usec\nrounds: 1872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3265.320547828762,
            "unit": "iter/sec",
            "range": "stddev: 0.00005863834675674064",
            "extra": "mean: 306.248647063131 usec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8970034.08163091,
            "unit": "iter/sec",
            "range": "stddev: 1.8142780844423897e-7",
            "extra": "mean: 111.48229659992239 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 214.58210702141054,
            "unit": "iter/sec",
            "range": "stddev: 0.00019751351605844158",
            "extra": "mean: 4.6602208072279865 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0781535212879532,
            "unit": "iter/sec",
            "range": "stddev: 0.03224187936071857",
            "extra": "mean: 927.5116949999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 329.99495256463433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004067455878148208",
            "extra": "mean: 3.030349380280704 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1820996.495250451,
            "unit": "iter/sec",
            "range": "stddev: 5.010513373599813e-7",
            "extra": "mean: 549.1498762398668 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1481327.137467717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017830700068588113",
            "extra": "mean: 675.0703303184393 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4070994.9396788375,
            "unit": "iter/sec",
            "range": "stddev: 4.490432973737285e-7",
            "extra": "mean: 245.6401972534208 nsec\nrounds: 46083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3337.87196658142,
            "unit": "iter/sec",
            "range": "stddev: 0.00005706886860551946",
            "extra": "mean: 299.59207842959285 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 174.37075680799387,
            "unit": "iter/sec",
            "range": "stddev: 0.00050681350414549",
            "extra": "mean: 5.734906576686693 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 239.30846363191603,
            "unit": "iter/sec",
            "range": "stddev: 0.00019115091164622887",
            "extra": "mean: 4.178707200001564 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 130.72257525256686,
            "unit": "iter/sec",
            "range": "stddev: 0.0008769708966904332",
            "extra": "mean: 7.649788095651552 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.25011322251266,
            "unit": "iter/sec",
            "range": "stddev: 0.0019301066015383693",
            "extra": "mean: 17.467214363634945 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 84.27871410985252,
            "unit": "iter/sec",
            "range": "stddev: 0.0007104588310814972",
            "extra": "mean: 11.865392235298664 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 52.78525130008524,
            "unit": "iter/sec",
            "range": "stddev: 0.0018781198646208588",
            "extra": "mean: 18.944685785712743 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 190.07746680906158,
            "unit": "iter/sec",
            "range": "stddev: 0.0004256890181911624",
            "extra": "mean: 5.2610128743168145 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 119.29247157935232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003490628582751718",
            "extra": "mean: 8.382758666667483 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.959343665258487,
            "unit": "iter/sec",
            "range": "stddev: 0.0035716545293897005",
            "extra": "mean: 47.711417684207674 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.38796796905069,
            "unit": "iter/sec",
            "range": "stddev: 0.0005633537182530723",
            "extra": "mean: 10.594570701298439 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 188.959547717247,
            "unit": "iter/sec",
            "range": "stddev: 0.0009271876760583169",
            "extra": "mean: 5.2921379844556355 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4924522.483793459,
            "unit": "iter/sec",
            "range": "stddev: 1.2685925293974507e-7",
            "extra": "mean: 203.06537401151306 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7426.965619996995,
            "unit": "iter/sec",
            "range": "stddev: 0.00004634759522982446",
            "extra": "mean: 134.6444902488191 usec\nrounds: 3333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.49580814633235,
            "unit": "iter/sec",
            "range": "stddev: 0.0009988513400951634",
            "extra": "mean: 16.530070936173228 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08824154144852729,
            "unit": "iter/sec",
            "range": "stddev: 0.238767024164909",
            "extra": "mean: 11.332530955200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 159.24233998707314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007543453198385988",
            "extra": "mean: 6.279736909676015 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 61.422818264292026,
            "unit": "iter/sec",
            "range": "stddev: 0.0164334434586659",
            "extra": "mean: 16.280594545453265 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8338256365399264,
            "unit": "iter/sec",
            "range": "stddev: 0.008886783348614476",
            "extra": "mean: 545.308114400018 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 13825.942803494388,
            "unit": "iter/sec",
            "range": "stddev: 0.00002233242131368055",
            "extra": "mean: 72.32779812652332 usec\nrounds: 5444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 435.2403499325321,
            "unit": "iter/sec",
            "range": "stddev: 0.0002962251061431995",
            "extra": "mean: 2.297581095491291 msec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 111436.91532338636,
            "unit": "iter/sec",
            "range": "stddev: 0.000004571800135217853",
            "extra": "mean: 8.973687014738625 usec\nrounds: 33222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3684.1799858332392,
            "unit": "iter/sec",
            "range": "stddev: 0.00010025928546495334",
            "extra": "mean: 271.4308214705295 usec\nrounds: 1686"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3737295.7816622267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011203391440151113",
            "extra": "mean: 267.57314872110555 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.232778520500185,
            "unit": "iter/sec",
            "range": "stddev: 0.0023478082619891425",
            "extra": "mean: 89.025168454534 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3992.5792140236827,
            "unit": "iter/sec",
            "range": "stddev: 0.000097416022122817",
            "extra": "mean: 250.46466116127715 usec\nrounds: 2119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1410509.8731825058,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026414310673555005",
            "extra": "mean: 708.9634883190996 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.45482980123655914,
            "unit": "iter/sec",
            "range": "stddev: 0.023411583003070415",
            "extra": "mean: 2.198624622400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8243.1665503814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004025216259996036",
            "extra": "mean: 121.31260406884915 usec\nrounds: 5751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.05423960687351,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718650322885902",
            "extra": "mean: 14.481370089555837 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.8673592911212826,
            "unit": "iter/sec",
            "range": "stddev: 0.007922272805488956",
            "extra": "mean: 258.57437199998685 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.30776866285916,
            "unit": "iter/sec",
            "range": "stddev: 0.0011028841977208975",
            "extra": "mean: 13.829772630138557 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 345538.5566232003,
            "unit": "iter/sec",
            "range": "stddev: 0.000004154232703352631",
            "extra": "mean: 2.894033041558574 usec\nrounds: 1604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 178.7475254571253,
            "unit": "iter/sec",
            "range": "stddev: 0.00038201126343797285",
            "extra": "mean: 5.594483042171467 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.10665484269464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006555418474439585",
            "extra": "mean: 12.969049196079132 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 541.5475044622436,
            "unit": "iter/sec",
            "range": "stddev: 0.00015590942328953643",
            "extra": "mean: 1.8465600741582204 msec\nrounds: 445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 115.12577827921046,
            "unit": "iter/sec",
            "range": "stddev: 0.0012518929388811721",
            "extra": "mean: 8.686151919639887 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 533434.2341385856,
            "unit": "iter/sec",
            "range": "stddev: 0.000006879722280502544",
            "extra": "mean: 1.8746453377047436 usec\nrounds: 21598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 186.44916771497273,
            "unit": "iter/sec",
            "range": "stddev: 0.00041320839514596665",
            "extra": "mean: 5.363392136610194 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 128.0637572473762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008983829183511454",
            "extra": "mean: 7.8086105038159666 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 234.88171847983008,
            "unit": "iter/sec",
            "range": "stddev: 0.0007594079249772653",
            "extra": "mean: 4.257462038646795 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3440.4131903480084,
            "unit": "iter/sec",
            "range": "stddev: 0.00021094886484800593",
            "extra": "mean: 290.66276190472547 usec\nrounds: 2184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 65.48556715834053,
            "unit": "iter/sec",
            "range": "stddev: 0.001441995131604859",
            "extra": "mean: 15.27054041667005 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.13657193046333,
            "unit": "iter/sec",
            "range": "stddev: 0.015335914871579582",
            "extra": "mean: 10.189881104758483 msec\nrounds: 105"
          }
        ]
      }
    ]
  }
}