window.BENCHMARK_DATA = {
  "lastUpdate": 1676973732547,
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
          "id": "057549b9d4b33bfd2dc93dedcfbbd95348e1ad70",
          "message": "chore: capitalize scope docs",
          "timestamp": "2023-02-21T04:53:23-05:00",
          "tree_id": "42cd7f5325b510d023c02e366e7006ffbb259bce",
          "url": "https://github.com/ibis-project/ibis/commit/057549b9d4b33bfd2dc93dedcfbbd95348e1ad70"
        },
        "date": 1676973641115,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 21.763133278341982,
            "unit": "iter/sec",
            "range": "stddev: 0.01571045839994787",
            "extra": "mean: 45.949266000000556 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7102.716867183446,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254914233357927",
            "extra": "mean: 140.79119563674035 usec\nrounds: 2888"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 59.23656024814713,
            "unit": "iter/sec",
            "range": "stddev: 0.0010436134468117776",
            "extra": "mean: 16.881466375004095 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 284896.6062439181,
            "unit": "iter/sec",
            "range": "stddev: 0.000002663618331660735",
            "extra": "mean: 3.5100453219995056 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1241776.8876314154,
            "unit": "iter/sec",
            "range": "stddev: 0.000003208250330529215",
            "extra": "mean: 805.2976424029083 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.39012661203398014,
            "unit": "iter/sec",
            "range": "stddev: 0.06436283050057467",
            "extra": "mean: 2.5632704080000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 60.74996395949431,
            "unit": "iter/sec",
            "range": "stddev: 0.0027157167817165725",
            "extra": "mean: 16.46091511538609 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 374.42074514501206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005019136502399974",
            "extra": "mean: 2.6707921849060554 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 697.9363492464413,
            "unit": "iter/sec",
            "range": "stddev: 0.00021507096448540445",
            "extra": "mean: 1.4327954133348915 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 150.88893417263398,
            "unit": "iter/sec",
            "range": "stddev: 0.0014961770944219939",
            "extra": "mean: 6.6273912363638745 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 42.10907360594365,
            "unit": "iter/sec",
            "range": "stddev: 0.002364410632816174",
            "extra": "mean: 23.747850863640252 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 68.6221974204355,
            "unit": "iter/sec",
            "range": "stddev: 0.01880018022686164",
            "extra": "mean: 14.572544126985399 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2541.426434455202,
            "unit": "iter/sec",
            "range": "stddev: 0.00016814988053364888",
            "extra": "mean: 393.4798137150749 usec\nrounds: 977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4324820466606126,
            "unit": "iter/sec",
            "range": "stddev: 0.03688988156403129",
            "extra": "mean: 2.3122347106000065 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1059.5308711011062,
            "unit": "iter/sec",
            "range": "stddev: 0.0002333562969906844",
            "extra": "mean: 943.8139343318619 usec\nrounds: 868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.396667299736826,
            "unit": "iter/sec",
            "range": "stddev: 0.0018866124915404537",
            "extra": "mean: 22.02804874193479 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9299241.904873217,
            "unit": "iter/sec",
            "range": "stddev: 9.69099014098791e-8",
            "extra": "mean: 107.53564755380336 nsec\nrounds: 34723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.4622758828319545,
            "unit": "iter/sec",
            "range": "stddev: 0.030210669132833826",
            "extra": "mean: 2.1632104055999775 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2232.9606834954443,
            "unit": "iter/sec",
            "range": "stddev: 0.00017069147576973247",
            "extra": "mean: 447.83591909671003 usec\nrounds: 1063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.4404405387225245,
            "unit": "iter/sec",
            "range": "stddev: 0.006945253317468156",
            "extra": "mean: 290.66045140001506 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 84.81923799367748,
            "unit": "iter/sec",
            "range": "stddev: 0.0010253585381635095",
            "extra": "mean: 11.789778164177108 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 183.73879359495237,
            "unit": "iter/sec",
            "range": "stddev: 0.0010932517237856243",
            "extra": "mean: 5.4425087943293855 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.37400237488757,
            "unit": "iter/sec",
            "range": "stddev: 0.001419937428041799",
            "extra": "mean: 12.75933306578736 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2664.8463994396184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002785932725183447",
            "extra": "mean: 375.25614992679755 usec\nrounds: 1354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1234899.7830133752,
            "unit": "iter/sec",
            "range": "stddev: 0.000004446663430986518",
            "extra": "mean: 809.7823108850356 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 62.69598034861977,
            "unit": "iter/sec",
            "range": "stddev: 0.0015551371671278333",
            "extra": "mean: 15.949985859372795 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 63.9617695190117,
            "unit": "iter/sec",
            "range": "stddev: 0.0017564739170712967",
            "extra": "mean: 15.634339192300875 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 206.58347198583377,
            "unit": "iter/sec",
            "range": "stddev: 0.0007407579851482306",
            "extra": "mean: 4.84065830817566 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 72.81644833570496,
            "unit": "iter/sec",
            "range": "stddev: 0.0015079324132508038",
            "extra": "mean: 13.733160884058911 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 60.10163306354861,
            "unit": "iter/sec",
            "range": "stddev: 0.0015150152167319082",
            "extra": "mean: 16.63848299999848 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.4690876514463758,
            "unit": "iter/sec",
            "range": "stddev: 0.018605104462202246",
            "extra": "mean: 2.1317977502000303 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.3876924840317046,
            "unit": "iter/sec",
            "range": "stddev: 0.03421551123353646",
            "extra": "mean: 720.6207510000127 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 270.4549227600398,
            "unit": "iter/sec",
            "range": "stddev: 0.0011958856737040943",
            "extra": "mean: 3.6974738333280284 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.939014591919802,
            "unit": "iter/sec",
            "range": "stddev: 0.022448878981901264",
            "extra": "mean: 1.0649461771999882 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 116.57010910884503,
            "unit": "iter/sec",
            "range": "stddev: 0.0009806369013638163",
            "extra": "mean: 8.578528472219837 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.055314021975257,
            "unit": "iter/sec",
            "range": "stddev: 0.006598676932667377",
            "extra": "mean: 165.14420166665408 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 427.9682483751411,
            "unit": "iter/sec",
            "range": "stddev: 0.0005240436322156382",
            "extra": "mean: 2.3366219428583332 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2373.4063523694326,
            "unit": "iter/sec",
            "range": "stddev: 0.00023988355966282014",
            "extra": "mean: 421.3353516146421 usec\nrounds: 1331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 154.9637323665927,
            "unit": "iter/sec",
            "range": "stddev: 0.0008149607084906627",
            "extra": "mean: 6.453122835440825 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 150.78721052597263,
            "unit": "iter/sec",
            "range": "stddev: 0.0014466453744940329",
            "extra": "mean: 6.631862188522634 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 197.08316867054006,
            "unit": "iter/sec",
            "range": "stddev: 0.0007626400008773915",
            "extra": "mean: 5.074000010988659 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6007.044949683412,
            "unit": "iter/sec",
            "range": "stddev: 0.00009940301752128939",
            "extra": "mean: 166.4712031250412 usec\nrounds: 2624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 47.08142444341316,
            "unit": "iter/sec",
            "range": "stddev: 0.0025366474813816884",
            "extra": "mean: 21.239799173916097 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1282908.2783567149,
            "unit": "iter/sec",
            "range": "stddev: 0.000008044971787685524",
            "extra": "mean: 779.4789517461888 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 111.15161871304633,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550218716010189",
            "extra": "mean: 8.996720079998491 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 147.86973007655862,
            "unit": "iter/sec",
            "range": "stddev: 0.0012399076466825575",
            "extra": "mean: 6.76270930826922 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46020.27930154417,
            "unit": "iter/sec",
            "range": "stddev: 0.000014115175648140848",
            "extra": "mean: 21.729550867077116 usec\nrounds: 5190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 59.096491146428804,
            "unit": "iter/sec",
            "range": "stddev: 0.0016512204054540778",
            "extra": "mean: 16.92147842622683 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 168.27150094509142,
            "unit": "iter/sec",
            "range": "stddev: 0.0012272217485113225",
            "extra": "mean: 5.942776966887039 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 50.98717116885648,
            "unit": "iter/sec",
            "range": "stddev: 0.0017048523707715781",
            "extra": "mean: 19.612776647056094 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2657.238166129081,
            "unit": "iter/sec",
            "range": "stddev: 0.00013558903233028396",
            "extra": "mean: 376.33058742970906 usec\nrounds: 2991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1568474.7227950483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014249691358828322",
            "extra": "mean: 637.5620757330302 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2899.699938052506,
            "unit": "iter/sec",
            "range": "stddev: 0.00012147012872159218",
            "extra": "mean: 344.8632690841864 usec\nrounds: 1048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.891415978631166,
            "unit": "iter/sec",
            "range": "stddev: 0.0026602216235295855",
            "extra": "mean: 20.453488204086113 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 44.76109998288895,
            "unit": "iter/sec",
            "range": "stddev: 0.004249603292004328",
            "extra": "mean: 22.34082720000793 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 42.188975229808236,
            "unit": "iter/sec",
            "range": "stddev: 0.026428374367514582",
            "extra": "mean: 23.70287485185132 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4403.367715012768,
            "unit": "iter/sec",
            "range": "stddev: 0.00007555812007606206",
            "extra": "mean: 227.09890809041832 usec\nrounds: 2546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 51.92915392592653,
            "unit": "iter/sec",
            "range": "stddev: 0.0023593970741256757",
            "extra": "mean: 19.257005446813814 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.04181124670824,
            "unit": "iter/sec",
            "range": "stddev: 0.0021898459714262968",
            "extra": "mean: 24.3653963999994 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 177.36357465619596,
            "unit": "iter/sec",
            "range": "stddev: 0.0008615828466177403",
            "extra": "mean: 5.638136251698885 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.87038475821593,
            "unit": "iter/sec",
            "range": "stddev: 0.0031039278527983096",
            "extra": "mean: 35.880380148150245 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 160.00837347767634,
            "unit": "iter/sec",
            "range": "stddev: 0.0009694935773859027",
            "extra": "mean: 6.249672928145323 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3633420.3615729925,
            "unit": "iter/sec",
            "range": "stddev: 4.1515502198119355e-7",
            "extra": "mean: 275.22276546243745 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 71.32265950223528,
            "unit": "iter/sec",
            "range": "stddev: 0.0013335375019372677",
            "extra": "mean: 14.020789563640143 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2499.6996457267414,
            "unit": "iter/sec",
            "range": "stddev: 0.0001556788011563992",
            "extra": "mean: 400.0480624580273 usec\nrounds: 1505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 96316.35037536728,
            "unit": "iter/sec",
            "range": "stddev: 0.000014042530778651573",
            "extra": "mean: 10.382453198265576 usec\nrounds: 30031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.828483225987735,
            "unit": "iter/sec",
            "range": "stddev: 0.003540123080977854",
            "extra": "mean: 59.42306187498403 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3659932.695750953,
            "unit": "iter/sec",
            "range": "stddev: 8.20447398839563e-7",
            "extra": "mean: 273.2290681631619 nsec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4415328.044154487,
            "unit": "iter/sec",
            "range": "stddev: 3.32942674923996e-7",
            "extra": "mean: 226.48373801443452 nsec\nrounds: 52354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 25.70944561732746,
            "unit": "iter/sec",
            "range": "stddev: 0.0021552419221040533",
            "extra": "mean: 38.89621016666448 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 60.9148715624286,
            "unit": "iter/sec",
            "range": "stddev: 0.0015127614560906857",
            "extra": "mean: 16.416352433332314 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2476.6529180787975,
            "unit": "iter/sec",
            "range": "stddev: 0.00016322247007810232",
            "extra": "mean: 403.7707474875912 usec\nrounds: 1691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.07377621855355884,
            "unit": "iter/sec",
            "range": "stddev: 0.28595953650997424",
            "extra": "mean: 13.554503329199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.4137933842104,
            "unit": "iter/sec",
            "range": "stddev: 0.0015818321523765552",
            "extra": "mean: 15.524625199998354 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.494494748713183,
            "unit": "iter/sec",
            "range": "stddev: 0.002469915760030154",
            "extra": "mean: 35.09449838710196 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.338059416094428,
            "unit": "iter/sec",
            "range": "stddev: 0.00758890116915753",
            "extra": "mean: 107.08863109999811 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 63.992752363732826,
            "unit": "iter/sec",
            "range": "stddev: 0.0015009644001150366",
            "extra": "mean: 15.626769642850036 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 62.44223363764213,
            "unit": "iter/sec",
            "range": "stddev: 0.001301217955360728",
            "extra": "mean: 16.01480186956619 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 47.31217125996591,
            "unit": "iter/sec",
            "range": "stddev: 0.00153454882547511",
            "extra": "mean: 21.136210268290284 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 513704.1028425486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024974673951531014",
            "extra": "mean: 1.9466459280090707 usec\nrounds: 20284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7729.524335545103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006729361595095355",
            "extra": "mean: 129.37406709509736 usec\nrounds: 3115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 46.498719712312216,
            "unit": "iter/sec",
            "range": "stddev: 0.00397666247505429",
            "extra": "mean: 21.50596846939022 msec\nrounds: 49"
          }
        ]
      }
    ]
  }
}