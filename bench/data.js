window.BENCHMARK_DATA = {
  "lastUpdate": 1676212245063,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "fc82eaa7bcab167b9386b456b5a6515d97ebf86b",
          "message": "feat(clickhouse): implement `ops.MapLength`",
          "timestamp": "2023-02-12T09:25:37-05:00",
          "tree_id": "50a32478e24c90c8c9d0ce3ef836adfc0515f698",
          "url": "https://github.com/ibis-project/ibis/commit/fc82eaa7bcab167b9386b456b5a6515d97ebf86b"
        },
        "date": 1676212161084,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118937.8601336258,
            "unit": "iter/sec",
            "range": "stddev: 3.003773314907048e-7",
            "extra": "mean: 8.407751735877099 usec\nrounds: 23475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 380995.0923464058,
            "unit": "iter/sec",
            "range": "stddev: 5.813572497215635e-7",
            "extra": "mean: 2.6247057247939214 usec\nrounds: 1869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.30011228059445,
            "unit": "iter/sec",
            "range": "stddev: 0.00009697196718687035",
            "extra": "mean: 6.930001537736021 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8681356424250327,
            "unit": "iter/sec",
            "range": "stddev: 0.003123826986668553",
            "extra": "mean: 1.151893726199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.552389390743877,
            "unit": "iter/sec",
            "range": "stddev: 0.0010282142279592439",
            "extra": "mean: 644.1682776000022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.64011283527827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000835728081559083",
            "extra": "mean: 6.961843598290451 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.78139441323778,
            "unit": "iter/sec",
            "range": "stddev: 0.0006358116556716667",
            "extra": "mean: 22.33070258536637 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5360940.13514637,
            "unit": "iter/sec",
            "range": "stddev: 5.1078249184939194e-9",
            "extra": "mean: 186.53444634530226 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.80246034594256,
            "unit": "iter/sec",
            "range": "stddev: 0.00013471158091317025",
            "extra": "mean: 10.12120544871701 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.09636408974076,
            "unit": "iter/sec",
            "range": "stddev: 0.00008863060826988257",
            "extra": "mean: 13.87032498275872 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1556072.2875388768,
            "unit": "iter/sec",
            "range": "stddev: 1.179980274036797e-7",
            "extra": "mean: 642.6436663695266 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.532522606219441,
            "unit": "iter/sec",
            "range": "stddev: 0.0008336105061918413",
            "extra": "mean: 73.89605242856996 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 273.29383219103033,
            "unit": "iter/sec",
            "range": "stddev: 0.00004616836379409766",
            "extra": "mean: 3.659065380227855 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.90836738387144,
            "unit": "iter/sec",
            "range": "stddev: 0.00007221762409361011",
            "extra": "mean: 10.536478790698682 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5045.075781400462,
            "unit": "iter/sec",
            "range": "stddev: 0.00003986215429244432",
            "extra": "mean: 198.2130781239544 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 180.4886380931934,
            "unit": "iter/sec",
            "range": "stddev: 0.008033678799027347",
            "extra": "mean: 5.540514962962159 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.03597750460042,
            "unit": "iter/sec",
            "range": "stddev: 0.0005944687285288951",
            "extra": "mean: 6.2878853935492245 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9656.35580427563,
            "unit": "iter/sec",
            "range": "stddev: 0.00001293139477665587",
            "extra": "mean: 103.55873584910996 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4954.742505608977,
            "unit": "iter/sec",
            "range": "stddev: 0.0015859835925430593",
            "extra": "mean: 201.82683537397918 usec\nrounds: 2205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7365719406306869,
            "unit": "iter/sec",
            "range": "stddev: 0.004170222888781352",
            "extra": "mean: 1.3576406387999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.85001760290544,
            "unit": "iter/sec",
            "range": "stddev: 0.0006174446902004849",
            "extra": "mean: 6.903692637037979 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.1086441232915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002138499957477848",
            "extra": "mean: 4.09653662037028 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5749.639229840309,
            "unit": "iter/sec",
            "range": "stddev: 0.00004977912413697272",
            "extra": "mean: 173.9239559258006 usec\nrounds: 3721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.36416134906787,
            "unit": "iter/sec",
            "range": "stddev: 0.0006200955716851562",
            "extra": "mean: 6.695046462069133 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5851115281569459,
            "unit": "iter/sec",
            "range": "stddev: 0.001785472517061555",
            "extra": "mean: 1.709075880200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56748.057215397326,
            "unit": "iter/sec",
            "range": "stddev: 4.4091135875843796e-7",
            "extra": "mean: 17.621748638976705 usec\nrounds: 12675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6026.197745231486,
            "unit": "iter/sec",
            "range": "stddev: 0.00004855989050646388",
            "extra": "mean: 165.94211512413403 usec\nrounds: 1772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 333.0342308387764,
            "unit": "iter/sec",
            "range": "stddev: 0.000031295180384255816",
            "extra": "mean: 3.0026943401025497 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.2064068492664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713451525303142",
            "extra": "mean: 10.50349480768904 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 255.03529230933066,
            "unit": "iter/sec",
            "range": "stddev: 0.00021047816812829896",
            "extra": "mean: 3.9210259527026805 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.01249668784382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005807113122750576",
            "extra": "mean: 11.23437761224562 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2504719383685083,
            "unit": "iter/sec",
            "range": "stddev: 0.0016307616486978163",
            "extra": "mean: 444.3512415999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.03966148539996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002211802509610757",
            "extra": "mean: 3.967629515555144 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10110.370361574185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016111145394335572",
            "extra": "mean: 98.90834501974663 usec\nrounds: 2510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.120813668517233,
            "unit": "iter/sec",
            "range": "stddev: 0.00023286283383392952",
            "extra": "mean: 109.63934099999761 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 980.7135415635277,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537617566995285",
            "extra": "mean: 1.0196657409315715 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 253.5475281597463,
            "unit": "iter/sec",
            "range": "stddev: 0.00008797637482042509",
            "extra": "mean: 3.944033717299564 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8705057041844911,
            "unit": "iter/sec",
            "range": "stddev: 0.0013171952895480728",
            "extra": "mean: 1.1487575499999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 258.0082259938081,
            "unit": "iter/sec",
            "range": "stddev: 0.00019324024379506897",
            "extra": "mean: 3.8758454159674693 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1460.5008897722962,
            "unit": "iter/sec",
            "range": "stddev: 0.000005684669805764598",
            "extra": "mean: 684.6966044340501 usec\nrounds: 1173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.44247662238264,
            "unit": "iter/sec",
            "range": "stddev: 0.00029296726905136847",
            "extra": "mean: 8.234351174420084 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6012.566263512143,
            "unit": "iter/sec",
            "range": "stddev: 0.00006298570082293694",
            "extra": "mean: 166.31833333274005 usec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.1418909293845,
            "unit": "iter/sec",
            "range": "stddev: 0.0006047160619453435",
            "extra": "mean: 10.510617249999923 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.37998074874514,
            "unit": "iter/sec",
            "range": "stddev: 0.00019579866467414448",
            "extra": "mean: 9.767534557895068 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5179.558851700307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988477928503293",
            "extra": "mean: 193.06663533164172 usec\nrounds: 2202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 512.5271687380167,
            "unit": "iter/sec",
            "range": "stddev: 0.000029306327958879563",
            "extra": "mean: 1.9511160792944418 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 161.05770024932488,
            "unit": "iter/sec",
            "range": "stddev: 0.000610418777754019",
            "extra": "mean: 6.2089549177217425 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10795.03372966503,
            "unit": "iter/sec",
            "range": "stddev: 0.000001496246722510195",
            "extra": "mean: 92.63518994405494 usec\nrounds: 5907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4240.356660768549,
            "unit": "iter/sec",
            "range": "stddev: 0.0023293830440732186",
            "extra": "mean: 235.8292190965733 usec\nrounds: 2524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.55983038405918,
            "unit": "iter/sec",
            "range": "stddev: 0.0005020170015842792",
            "extra": "mean: 26.62418838889143 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.911182506892085,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273927774809186",
            "extra": "mean: 203.6169493999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.04570076571525,
            "unit": "iter/sec",
            "range": "stddev: 0.00010251397396022384",
            "extra": "mean: 6.942241210145252 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1570644.6632358534,
            "unit": "iter/sec",
            "range": "stddev: 8.755370173257523e-8",
            "extra": "mean: 636.681245228181 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 565459.1892290973,
            "unit": "iter/sec",
            "range": "stddev: 2.485628574899172e-7",
            "extra": "mean: 1.7684742224515293 usec\nrounds: 21414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.070374410017,
            "unit": "iter/sec",
            "range": "stddev: 0.00006622602748695557",
            "extra": "mean: 1.6153252381896233 msec\nrounds: 508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.25232641118071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002097925896629482",
            "extra": "mean: 22.597681999998578 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 221.0090803315546,
            "unit": "iter/sec",
            "range": "stddev: 0.008409427200975143",
            "extra": "mean: 4.524700969298704 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12033011.1872302,
            "unit": "iter/sec",
            "range": "stddev: 2.8944679519180954e-9",
            "extra": "mean: 83.10471788307824 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.66133788146523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231469837483847",
            "extra": "mean: 11.030060038463647 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.78153461753402,
            "unit": "iter/sec",
            "range": "stddev: 0.00011531743515567185",
            "extra": "mean: 5.821347458715324 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.955133315369554,
            "unit": "iter/sec",
            "range": "stddev: 0.00042427190676900547",
            "extra": "mean: 37.098685000003684 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4527.468490096117,
            "unit": "iter/sec",
            "range": "stddev: 0.000019855422200999614",
            "extra": "mean: 220.87398337227745 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.54633536451023,
            "unit": "iter/sec",
            "range": "stddev: 0.00017534020679740647",
            "extra": "mean: 14.804652163637787 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.75135785920003,
            "unit": "iter/sec",
            "range": "stddev: 0.0006245603798104576",
            "extra": "mean: 6.220787266231907 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.529381274161,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104761939165668",
            "extra": "mean: 11.295684953486388 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.9877056564707,
            "unit": "iter/sec",
            "range": "stddev: 0.000010488626736100338",
            "extra": "mean: 3.7880551956510726 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 412.5661238483041,
            "unit": "iter/sec",
            "range": "stddev: 0.000031242510313579375",
            "extra": "mean: 2.423853879887843 msec\nrounds: 358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 242.49708081289543,
            "unit": "iter/sec",
            "range": "stddev: 0.00019439537441167737",
            "extra": "mean: 4.123760981566514 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19395.305739135005,
            "unit": "iter/sec",
            "range": "stddev: 0.000011520433822165735",
            "extra": "mean: 51.55886756568335 usec\nrounds: 6154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.82969714697626,
            "unit": "iter/sec",
            "range": "stddev: 0.013512610533446845",
            "extra": "mean: 12.52666658823567 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2011768.1616136914,
            "unit": "iter/sec",
            "range": "stddev: 1.842289791075328e-8",
            "extra": "mean: 497.07516953546735 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.91507435266928,
            "unit": "iter/sec",
            "range": "stddev: 0.0003929677480864249",
            "extra": "mean: 14.724271592595214 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.41492253092002,
            "unit": "iter/sec",
            "range": "stddev: 0.0006935481734944472",
            "extra": "mean: 28.23668466666618 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.79267491538056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006539733818955824",
            "extra": "mean: 10.776712719101152 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1552476.7418207256,
            "unit": "iter/sec",
            "range": "stddev: 1.0264963528992087e-7",
            "extra": "mean: 644.1320330681491 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.23204802219414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321150515357635",
            "extra": "mean: 6.164010207546632 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.21937635108881,
            "unit": "iter/sec",
            "range": "stddev: 0.0006134744624237771",
            "extra": "mean: 12.016432276314655 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4301066.217618247,
            "unit": "iter/sec",
            "range": "stddev: 1.0523293753859963e-8",
            "extra": "mean: 232.50048927454054 nsec\nrounds: 196117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 163.46943113008646,
            "unit": "iter/sec",
            "range": "stddev: 0.0005971471081037845",
            "extra": "mean: 6.117351685185809 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.88360797476625,
            "unit": "iter/sec",
            "range": "stddev: 0.00015375022318252001",
            "extra": "mean: 17.276048176470606 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15303280207599446,
            "unit": "iter/sec",
            "range": "stddev: 0.012878520601012654",
            "extra": "mean: 6.534546753599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4626106.201641482,
            "unit": "iter/sec",
            "range": "stddev: 1.0260754799464048e-8",
            "extra": "mean: 216.16451426152534 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}