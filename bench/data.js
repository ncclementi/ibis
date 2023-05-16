window.BENCHMARK_DATA = {
  "lastUpdate": 1684224623540,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "5d611591f83c82faf95440465922acdfc4122dad",
          "message": "refactor(polars): align datatype conversion functions with the new convention",
          "timestamp": "2023-05-16T10:01:30+02:00",
          "tree_id": "1dc82e0121a015d8ac496f7fa030a6b5818368e6",
          "url": "https://github.com/ibis-project/ibis/commit/5d611591f83c82faf95440465922acdfc4122dad"
        },
        "date": 1684224520737,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8741830.485579977,
            "unit": "iter/sec",
            "range": "stddev: 5.763392554064935e-7",
            "extra": "mean: 114.39251786568252 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 163.0277976448142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006424479539767155",
            "extra": "mean: 6.133923259999392 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 60.41823283924551,
            "unit": "iter/sec",
            "range": "stddev: 0.015634340815335497",
            "extra": "mean: 16.551295081084135 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.47350793813916,
            "unit": "iter/sec",
            "range": "stddev: 0.0025586247231121997",
            "extra": "mean: 25.33344646153943 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1474.6054814063193,
            "unit": "iter/sec",
            "range": "stddev: 0.00023463375778115007",
            "extra": "mean: 678.1474859609963 usec\nrounds: 463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.52781030676805,
            "unit": "iter/sec",
            "range": "stddev: 0.0021544012246620275",
            "extra": "mean: 15.74113754544855 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5768095055495952,
            "unit": "iter/sec",
            "range": "stddev: 0.017950377183878596",
            "extra": "mean: 1.7336746194000057 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.807936887756266,
            "unit": "iter/sec",
            "range": "stddev: 0.002572709281778492",
            "extra": "mean: 37.302385640005014 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.4030006954454,
            "unit": "iter/sec",
            "range": "stddev: 0.0018254570816990522",
            "extra": "mean: 11.84792000000496 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1504.5972809495252,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910045840219544",
            "extra": "mean: 664.6296737748439 usec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 76.18133049889036,
            "unit": "iter/sec",
            "range": "stddev: 0.0012032381504729817",
            "extra": "mean: 13.126575677416998 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.93235400505777,
            "unit": "iter/sec",
            "range": "stddev: 0.001117354774283596",
            "extra": "mean: 13.901950156249399 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 64.52178306483201,
            "unit": "iter/sec",
            "range": "stddev: 0.01879567077070949",
            "extra": "mean: 15.498641737708828 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1534138.0955233013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027233981480342825",
            "extra": "mean: 651.8318024420713 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 194.50749045709557,
            "unit": "iter/sec",
            "range": "stddev: 0.0009385331385203303",
            "extra": "mean: 5.141190180645407 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 202.96627787403762,
            "unit": "iter/sec",
            "range": "stddev: 0.0005786918675298056",
            "extra": "mean: 4.9269268297889734 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.365373090101674,
            "unit": "iter/sec",
            "range": "stddev: 0.004474069574239404",
            "extra": "mean: 157.09998233332576 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1406737.8562202111,
            "unit": "iter/sec",
            "range": "stddev: 0.000005215934827677797",
            "extra": "mean: 710.8644980145183 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 561.2515297345733,
            "unit": "iter/sec",
            "range": "stddev: 0.00037013007627549843",
            "extra": "mean: 1.781732337501012 msec\nrounds: 400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.29362118203422,
            "unit": "iter/sec",
            "range": "stddev: 0.002093382743380394",
            "extra": "mean: 30.965867666656283 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 190.52206886461113,
            "unit": "iter/sec",
            "range": "stddev: 0.0011328935792357412",
            "extra": "mean: 5.2487357814207884 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.32695883922679,
            "unit": "iter/sec",
            "range": "stddev: 0.0013208472844957217",
            "extra": "mean: 12.932100460321157 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 729844.0891191972,
            "unit": "iter/sec",
            "range": "stddev: 0.000028007615205474178",
            "extra": "mean: 1.370155646813331 usec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1497.2428930556143,
            "unit": "iter/sec",
            "range": "stddev: 0.00027497561331390753",
            "extra": "mean: 667.8943040158117 usec\nrounds: 921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 77.42952049690389,
            "unit": "iter/sec",
            "range": "stddev: 0.001313134822440432",
            "extra": "mean: 12.914970848101612 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 18.663398521027595,
            "unit": "iter/sec",
            "range": "stddev: 0.03235036073307714",
            "extra": "mean: 53.58080945832692 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.3774926609149,
            "unit": "iter/sec",
            "range": "stddev: 0.0003502902831473936",
            "extra": "mean: 1.9593340505404713 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.11733056631186,
            "unit": "iter/sec",
            "range": "stddev: 0.00041988523336540474",
            "extra": "mean: 3.309972314813994 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.657487590232456,
            "unit": "iter/sec",
            "range": "stddev: 0.001140222896756853",
            "extra": "mean: 15.709071121956107 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 76.165225397615,
            "unit": "iter/sec",
            "range": "stddev: 0.002633779384911081",
            "extra": "mean: 13.129351285702537 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 70.10228133152961,
            "unit": "iter/sec",
            "range": "stddev: 0.0012959229186654897",
            "extra": "mean: 14.264871000000312 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1456969.5533250775,
            "unit": "iter/sec",
            "range": "stddev: 0.000010338882290210267",
            "extra": "mean: 686.3561408800977 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 120.59934823001694,
            "unit": "iter/sec",
            "range": "stddev: 0.004280649313470209",
            "extra": "mean: 8.291918776316422 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.87715684000055,
            "unit": "iter/sec",
            "range": "stddev: 0.001365377895111037",
            "extra": "mean: 13.355207945953742 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 189.07656587712157,
            "unit": "iter/sec",
            "range": "stddev: 0.0006271046993432886",
            "extra": "mean: 5.28886271739189 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.698056619729176,
            "unit": "iter/sec",
            "range": "stddev: 0.0095326348689817",
            "extra": "mean: 59.88720859998011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0179364220942033,
            "unit": "iter/sec",
            "range": "stddev: 0.01463368255686933",
            "extra": "mean: 982.3796244000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122531.25856652459,
            "unit": "iter/sec",
            "range": "stddev: 0.000011737503817417383",
            "extra": "mean: 8.161182801016286 usec\nrounds: 34130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.43651967170148,
            "unit": "iter/sec",
            "range": "stddev: 0.0025096036355906092",
            "extra": "mean: 14.612081455882397 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 246.7225940271976,
            "unit": "iter/sec",
            "range": "stddev: 0.0004904631909522262",
            "extra": "mean: 4.053135076432296 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.01110709160152,
            "unit": "iter/sec",
            "range": "stddev: 0.005206611804675918",
            "extra": "mean: 39.982236545450235 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1432.7313846137802,
            "unit": "iter/sec",
            "range": "stddev: 0.000391059735896801",
            "extra": "mean: 697.9675400002275 usec\nrounds: 950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.6822265556494,
            "unit": "iter/sec",
            "range": "stddev: 0.0015055234880634722",
            "extra": "mean: 14.350861753841679 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1527.1654474328288,
            "unit": "iter/sec",
            "range": "stddev: 0.00016925030943351694",
            "extra": "mean: 654.8079002710571 usec\nrounds: 1113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1158.9476299474659,
            "unit": "iter/sec",
            "range": "stddev: 0.0006787306415850574",
            "extra": "mean: 862.8517580603095 usec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7964240836327083,
            "unit": "iter/sec",
            "range": "stddev: 0.011423677552821813",
            "extra": "mean: 556.6614304000041 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 175.14727140117517,
            "unit": "iter/sec",
            "range": "stddev: 0.00482478147656302",
            "extra": "mean: 5.7094808957057515 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 71.05286831417814,
            "unit": "iter/sec",
            "range": "stddev: 0.0031513972443577656",
            "extra": "mean: 14.074027181819716 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.56920062623473,
            "unit": "iter/sec",
            "range": "stddev: 0.0018961966381324659",
            "extra": "mean: 11.966130972970822 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 393.60083449339066,
            "unit": "iter/sec",
            "range": "stddev: 0.00039903993230357626",
            "extra": "mean: 2.540645019940353 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4310227.077548089,
            "unit": "iter/sec",
            "range": "stddev: 7.284419479861412e-7",
            "extra": "mean: 232.00633795135715 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 93.54936669531835,
            "unit": "iter/sec",
            "range": "stddev: 0.0016179717893225547",
            "extra": "mean: 10.689543236106639 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 42.01438080831376,
            "unit": "iter/sec",
            "range": "stddev: 0.0030571206472409466",
            "extra": "mean: 23.80137421428144 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.80732849973568,
            "unit": "iter/sec",
            "range": "stddev: 0.0027819216635988336",
            "extra": "mean: 27.927243999992395 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.780700913242846,
            "unit": "iter/sec",
            "range": "stddev: 0.04534727849865189",
            "extra": "mean: 38.78870490624742 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10476.164900470694,
            "unit": "iter/sec",
            "range": "stddev: 0.00004840222229160829",
            "extra": "mean: 95.45477849008181 usec\nrounds: 5300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5148544.686307208,
            "unit": "iter/sec",
            "range": "stddev: 8.516528491400155e-7",
            "extra": "mean: 194.22964370087698 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.90894775787434,
            "unit": "iter/sec",
            "range": "stddev: 0.0018335610319745717",
            "extra": "mean: 13.349540074067868 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4554013.635874694,
            "unit": "iter/sec",
            "range": "stddev: 4.978328798628925e-7",
            "extra": "mean: 219.58651860920875 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.06353837254024,
            "unit": "iter/sec",
            "range": "stddev: 0.0009600687757063409",
            "extra": "mean: 8.470015499997794 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 887.863393802867,
            "unit": "iter/sec",
            "range": "stddev: 0.00031709711530170803",
            "extra": "mean: 1.1262993913025665 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8322.687977191554,
            "unit": "iter/sec",
            "range": "stddev: 0.00011337900707950013",
            "extra": "mean: 120.15348920210808 usec\nrounds: 3334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 189.20667986629388,
            "unit": "iter/sec",
            "range": "stddev: 0.0008279299233812956",
            "extra": "mean: 5.285225662786679 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3066.1721703786015,
            "unit": "iter/sec",
            "range": "stddev: 0.0001515147126408422",
            "extra": "mean: 326.1395461287887 usec\nrounds: 1214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3341005.352127875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010358121126991965",
            "extra": "mean: 299.31110387549614 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1433.3343028766742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002888291068077057",
            "extra": "mean: 697.6739466801425 usec\nrounds: 994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 54.10365531649491,
            "unit": "iter/sec",
            "range": "stddev: 0.032703444075133585",
            "extra": "mean: 18.483039531251855 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.86840824096785,
            "unit": "iter/sec",
            "range": "stddev: 0.0013309051970997051",
            "extra": "mean: 13.180716759258623 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 139.46173837782786,
            "unit": "iter/sec",
            "range": "stddev: 0.0009947315750217364",
            "extra": "mean: 7.170425463153294 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10313037714096739,
            "unit": "iter/sec",
            "range": "stddev: 0.14927082631209204",
            "extra": "mean: 9.696464104200015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1397894.4855046577,
            "unit": "iter/sec",
            "range": "stddev: 0.000012353451474409395",
            "extra": "mean: 715.3615744030833 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.41478954654892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007836104152698939",
            "extra": "mean: 7.609493600001439 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.86948199880243,
            "unit": "iter/sec",
            "range": "stddev: 0.0012202099010024453",
            "extra": "mean: 5.158109413044067 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.856001408372187,
            "unit": "iter/sec",
            "range": "stddev: 0.002301853748472005",
            "extra": "mean: 72.17089335713922 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0505028285154183,
            "unit": "iter/sec",
            "range": "stddev: 0.021308255801652697",
            "extra": "mean: 951.9250904000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5812471975100958,
            "unit": "iter/sec",
            "range": "stddev: 0.017740025666752725",
            "extra": "mean: 1.720438402600007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.84572696402223,
            "unit": "iter/sec",
            "range": "stddev: 0.0016258197014016634",
            "extra": "mean: 13.541744947371184 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.497437943880293,
            "unit": "iter/sec",
            "range": "stddev: 0.043578770098311854",
            "extra": "mean: 2.010301007999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1457.7149998557827,
            "unit": "iter/sec",
            "range": "stddev: 0.00034357103500511044",
            "extra": "mean: 686.0051519665599 usec\nrounds: 941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5937.609635813785,
            "unit": "iter/sec",
            "range": "stddev: 0.00014227060640306966",
            "extra": "mean: 168.4179427977744 usec\nrounds: 3881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1471.670966586956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002981112014509956",
            "extra": "mean: 679.49971338985 usec\nrounds: 956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 70.9225757193007,
            "unit": "iter/sec",
            "range": "stddev: 0.002133857661341145",
            "extra": "mean: 14.099882722221302 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 131.9341927571026,
            "unit": "iter/sec",
            "range": "stddev: 0.018829482688816002",
            "extra": "mean: 7.579536275641976 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.4502181948472,
            "unit": "iter/sec",
            "range": "stddev: 0.002078246041875868",
            "extra": "mean: 13.802580929578511 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.78956698110134,
            "unit": "iter/sec",
            "range": "stddev: 0.0020327966245369854",
            "extra": "mean: 14.126375434207267 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1490.570465307365,
            "unit": "iter/sec",
            "range": "stddev: 0.0003013773448258147",
            "extra": "mean: 670.8840831579162 usec\nrounds: 1419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 125.92567084748522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006505927301333609",
            "extra": "mean: 7.941192556449821 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 133.49306009358102,
            "unit": "iter/sec",
            "range": "stddev: 0.0015217210775150336",
            "extra": "mean: 7.4910261200019095 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7939.297933426092,
            "unit": "iter/sec",
            "range": "stddev: 0.00008508356926338441",
            "extra": "mean: 125.95572157454785 usec\nrounds: 5233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4167520.78690327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011771303848986147",
            "extra": "mean: 239.95081275741978 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 55.560162602135556,
            "unit": "iter/sec",
            "range": "stddev: 0.02958041439470429",
            "extra": "mean: 17.998507440681305 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 186.1216539172927,
            "unit": "iter/sec",
            "range": "stddev: 0.0012451025652306387",
            "extra": "mean: 5.372829968749215 msec\nrounds: 192"
          }
        ]
      }
    ]
  }
}