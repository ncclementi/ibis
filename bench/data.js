window.BENCHMARK_DATA = {
  "lastUpdate": 1675735766070,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "801432334bc22acfb2d419ceaf67fa7251aab713",
          "message": "chore(deps): update cachix/install-nix-action action to v19",
          "timestamp": "2023-02-06T21:02:50-05:00",
          "tree_id": "d04c606b846e5723fbc9ac3680a763886949aee6",
          "url": "https://github.com/ibis-project/ibis/commit/801432334bc22acfb2d419ceaf67fa7251aab713"
        },
        "date": 1675735678089,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 2074960.037582301,
            "unit": "iter/sec",
            "range": "stddev: 0.000005455853944717558",
            "extra": "mean: 481.93699246621566 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5941.849749005219,
            "unit": "iter/sec",
            "range": "stddev: 0.0001930416275662687",
            "extra": "mean: 168.29775949272687 usec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0539264138578215,
            "unit": "iter/sec",
            "range": "stddev: 0.013365084903198555",
            "extra": "mean: 948.8328471999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 94.04235278121851,
            "unit": "iter/sec",
            "range": "stddev: 0.0005226132197398534",
            "extra": "mean: 10.633506823531036 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1235524.3271580047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031952239282852954",
            "extra": "mean: 809.3729747112582 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 106.81539629616005,
            "unit": "iter/sec",
            "range": "stddev: 0.010472777769356777",
            "extra": "mean: 9.36194626126149 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3691.5050317761998,
            "unit": "iter/sec",
            "range": "stddev: 0.0001619541970494448",
            "extra": "mean: 270.89222184233114 usec\nrounds: 3214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 331524.16073693585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013940696056696895",
            "extra": "mean: 3.016371409483785 usec\nrounds: 1497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 179.28963154429957,
            "unit": "iter/sec",
            "range": "stddev: 0.00044751945389524686",
            "extra": "mean: 5.577567377357882 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 392.74248738903077,
            "unit": "iter/sec",
            "range": "stddev: 0.00042450533534832587",
            "extra": "mean: 2.5461976539590707 msec\nrounds: 341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 115.79581194113177,
            "unit": "iter/sec",
            "range": "stddev: 0.0011687365120333754",
            "extra": "mean: 8.63589091208566 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.4699738069095827,
            "unit": "iter/sec",
            "range": "stddev: 0.011433765123671936",
            "extra": "mean: 288.1866134000063 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1104.66667989266,
            "unit": "iter/sec",
            "range": "stddev: 0.00014355666865739124",
            "extra": "mean: 905.2504417868107 usec\nrounds: 627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1382515.8927983334,
            "unit": "iter/sec",
            "range": "stddev: 0.000002961469896407875",
            "extra": "mean: 723.3189905512857 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 65.74588200174925,
            "unit": "iter/sec",
            "range": "stddev: 0.00161381578101019",
            "extra": "mean: 15.210078100000146 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.5579383097204,
            "unit": "iter/sec",
            "range": "stddev: 0.004011237785201172",
            "extra": "mean: 53.88529605555448 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1223101.909457126,
            "unit": "iter/sec",
            "range": "stddev: 0.000003298583093704067",
            "extra": "mean: 817.5933601835764 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6188191041377895,
            "unit": "iter/sec",
            "range": "stddev: 0.005656565674516111",
            "extra": "mean: 617.7342467999949 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.552305084638217,
            "unit": "iter/sec",
            "range": "stddev: 0.0021366156832290026",
            "extra": "mean: 35.023441961539646 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3688.8463026068507,
            "unit": "iter/sec",
            "range": "stddev: 0.00008244144045141418",
            "extra": "mean: 271.08746691162366 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.0563856939691,
            "unit": "iter/sec",
            "range": "stddev: 0.001172265174261901",
            "extra": "mean: 14.912822837839553 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3746.150332365927,
            "unit": "iter/sec",
            "range": "stddev: 0.00007448927201333383",
            "extra": "mean: 266.94070212832 usec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8220.699362839801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000542599110198249",
            "extra": "mean: 121.64415165458074 usec\nrounds: 4774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.976085706448853,
            "unit": "iter/sec",
            "range": "stddev: 0.002679764490113094",
            "extra": "mean: 33.359925968748705 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 65.30952730642095,
            "unit": "iter/sec",
            "range": "stddev: 0.0010825733465365747",
            "extra": "mean: 15.31170169565267 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 484474.5034293092,
            "unit": "iter/sec",
            "range": "stddev: 0.00000389167272028243",
            "extra": "mean: 2.064092109949213 usec\nrounds: 19379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8892742.557237023,
            "unit": "iter/sec",
            "range": "stddev: 1.8149388915050912e-7",
            "extra": "mean: 112.45124814568975 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 65.91796594518728,
            "unit": "iter/sec",
            "range": "stddev: 0.0011732966149244923",
            "extra": "mean: 15.170371015870384 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.924002359822815,
            "unit": "iter/sec",
            "range": "stddev: 0.0034335116092951323",
            "extra": "mean: 100.76579627273024 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 739.2550772764858,
            "unit": "iter/sec",
            "range": "stddev: 0.0003900015736653084",
            "extra": "mean: 1.3527130631068955 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 176.13333014007512,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485597931915767",
            "extra": "mean: 5.677517135483222 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 173.0675873411029,
            "unit": "iter/sec",
            "range": "stddev: 0.0007050655230646743",
            "extra": "mean: 5.778089446807143 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.1333204075134,
            "unit": "iter/sec",
            "range": "stddev: 0.0011681876734656901",
            "extra": "mean: 20.775628847826265 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5505600207615746,
            "unit": "iter/sec",
            "range": "stddev: 0.026913493549049466",
            "extra": "mean: 1.816332392999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 114.84606779573629,
            "unit": "iter/sec",
            "range": "stddev: 0.0011557028997377582",
            "extra": "mean: 8.707307260868408 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 29.509951202803062,
            "unit": "iter/sec",
            "range": "stddev: 0.05609618816473224",
            "extra": "mean: 33.886874062503125 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.249507658046,
            "unit": "iter/sec",
            "range": "stddev: 0.0017582938123824165",
            "extra": "mean: 9.68527620792071 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 116.57314155158282,
            "unit": "iter/sec",
            "range": "stddev: 0.0009385305218934649",
            "extra": "mean: 8.578305317074317 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.35196713389136,
            "unit": "iter/sec",
            "range": "stddev: 0.001007995363517444",
            "extra": "mean: 12.445246030301773 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 187.71086033889813,
            "unit": "iter/sec",
            "range": "stddev: 0.000574027309461869",
            "extra": "mean: 5.327342265623702 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 65.03188777377932,
            "unit": "iter/sec",
            "range": "stddev: 0.0018331400588296335",
            "extra": "mean: 15.377071683334975 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 177.2000143408609,
            "unit": "iter/sec",
            "range": "stddev: 0.0006791638357959119",
            "extra": "mean: 5.643340401070205 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7465.257604158981,
            "unit": "iter/sec",
            "range": "stddev: 0.00012505011753690635",
            "extra": "mean: 133.95385035914748 usec\nrounds: 3896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 57.08497783971683,
            "unit": "iter/sec",
            "range": "stddev: 0.0021888043470351024",
            "extra": "mean: 17.517743508770373 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 187.41101736231818,
            "unit": "iter/sec",
            "range": "stddev: 0.0008252878151095667",
            "extra": "mean: 5.3358655967739566 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 305.65757230813335,
            "unit": "iter/sec",
            "range": "stddev: 0.0004010136358873495",
            "extra": "mean: 3.2716349621199643 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1281539.0716511614,
            "unit": "iter/sec",
            "range": "stddev: 0.000002534220876731978",
            "extra": "mean: 780.3117533604179 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.17473828594089,
            "unit": "iter/sec",
            "range": "stddev: 0.002330714957097838",
            "extra": "mean: 15.582455444451348 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.29247130344119,
            "unit": "iter/sec",
            "range": "stddev: 0.0024250870898463515",
            "extra": "mean: 24.217489736843703 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.24076228196049,
            "unit": "iter/sec",
            "range": "stddev: 0.017336025765685582",
            "extra": "mean: 10.17907411110984 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 209.70315522284594,
            "unit": "iter/sec",
            "range": "stddev: 0.0004661730342293247",
            "extra": "mean: 4.7686454642865375 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3134.4153273441034,
            "unit": "iter/sec",
            "range": "stddev: 0.00009885347599376511",
            "extra": "mean: 319.0387665846868 usec\nrounds: 1628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2742.9899856110665,
            "unit": "iter/sec",
            "range": "stddev: 0.0001857334772952974",
            "extra": "mean: 364.5656765958721 usec\nrounds: 1645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 107.17534570964621,
            "unit": "iter/sec",
            "range": "stddev: 0.0010060750205932163",
            "extra": "mean: 9.330504076088053 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3146.910881130688,
            "unit": "iter/sec",
            "range": "stddev: 0.00011283620748762473",
            "extra": "mean: 317.7719477205847 usec\nrounds: 1645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.343569594233406,
            "unit": "iter/sec",
            "range": "stddev: 0.008287328682920415",
            "extra": "mean: 157.63995099999306 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 148.03597405596452,
            "unit": "iter/sec",
            "range": "stddev: 0.0010607518615194282",
            "extra": "mean: 6.755114804878126 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 97.10977971405379,
            "unit": "iter/sec",
            "range": "stddev: 0.016759012763816236",
            "extra": "mean: 10.297624018348786 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.41102065398334436,
            "unit": "iter/sec",
            "range": "stddev: 0.02200808313928807",
            "extra": "mean: 2.432967760399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4093246.768489345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011729925236307563",
            "extra": "mean: 244.30484076766768 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 47.26182082057793,
            "unit": "iter/sec",
            "range": "stddev: 0.0009245350569609767",
            "extra": "mean: 21.15872775609604 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12803.187349443167,
            "unit": "iter/sec",
            "range": "stddev: 0.00003233551115936391",
            "extra": "mean: 78.10555080594769 usec\nrounds: 1427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.94526431524201,
            "unit": "iter/sec",
            "range": "stddev: 0.0007023065828417323",
            "extra": "mean: 19.251033047618467 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 101160.65109433359,
            "unit": "iter/sec",
            "range": "stddev: 0.00001679762802140018",
            "extra": "mean: 9.885266545660004 usec\nrounds: 34722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 159.99665195572746,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314698662749164",
            "extra": "mean: 6.250130785716124 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 223.83853592678443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002698767366207802",
            "extra": "mean: 4.467505989795658 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 24.97128853268112,
            "unit": "iter/sec",
            "range": "stddev: 0.03324455245670105",
            "extra": "mean: 40.04599116666536 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.1069429235911,
            "unit": "iter/sec",
            "range": "stddev: 0.0018089343797766844",
            "extra": "mean: 36.890917681820284 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46085.41105129377,
            "unit": "iter/sec",
            "range": "stddev: 0.000015060575632781584",
            "extra": "mean: 21.698840851977746 usec\nrounds: 4367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.38284670098814,
            "unit": "iter/sec",
            "range": "stddev: 0.0011164758792568622",
            "extra": "mean: 9.489210353534922 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3764.547800270058,
            "unit": "iter/sec",
            "range": "stddev: 0.00009960238031644457",
            "extra": "mean: 265.63615420908263 usec\nrounds: 2970"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3309.4345823565127,
            "unit": "iter/sec",
            "range": "stddev: 0.00014334188700896038",
            "extra": "mean: 302.1664200075956 usec\nrounds: 2719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.49386904078359584,
            "unit": "iter/sec",
            "range": "stddev: 0.02167179529067096",
            "extra": "mean: 2.024828279199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 169.78885861424013,
            "unit": "iter/sec",
            "range": "stddev: 0.0005005308904895582",
            "extra": "mean: 5.889667956788599 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5463811034372498,
            "unit": "iter/sec",
            "range": "stddev: 0.009934456803705619",
            "extra": "mean: 1.830224350200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 469.2304533463954,
            "unit": "iter/sec",
            "range": "stddev: 0.00036280285813524853",
            "extra": "mean: 2.1311489756650124 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 113.23594094967402,
            "unit": "iter/sec",
            "range": "stddev: 0.0004888730305062676",
            "extra": "mean: 8.831118385322862 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3479143.44541246,
            "unit": "iter/sec",
            "range": "stddev: 6.831306799018094e-7",
            "extra": "mean: 287.42706809596007 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 107.15140464867754,
            "unit": "iter/sec",
            "range": "stddev: 0.0013191987768796883",
            "extra": "mean: 9.33258880999972 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 61.45460767175757,
            "unit": "iter/sec",
            "range": "stddev: 0.0012244705937891358",
            "extra": "mean: 16.272172874997715 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08407750801325121,
            "unit": "iter/sec",
            "range": "stddev: 0.13833831557266718",
            "extra": "mean: 11.89378733540001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 74.96602865519851,
            "unit": "iter/sec",
            "range": "stddev: 0.0008650647319025528",
            "extra": "mean: 13.339375420291187 msec\nrounds: 69"
          }
        ]
      }
    ]
  }
}