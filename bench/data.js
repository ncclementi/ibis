window.BENCHMARK_DATA = {
  "lastUpdate": 1683892091003,
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
          "id": "9102763df4354120307eb17b79246a11e3bcbb79",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-12T07:41:34-04:00",
          "tree_id": "20fc226a0bc87db757aedb36f6166f6682660c27",
          "url": "https://github.com/ibis-project/ibis/commit/9102763df4354120307eb17b79246a11e3bcbb79"
        },
        "date": 1683892009486,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1904280.7603242942,
            "unit": "iter/sec",
            "range": "stddev: 8.894869768603979e-8",
            "extra": "mean: 525.1326489428494 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.369450194541052,
            "unit": "iter/sec",
            "range": "stddev: 0.0008323968346884907",
            "extra": "mean: 37.92267159999483 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.79893770306836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000533479524720737",
            "extra": "mean: 9.025357288893094 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1883709.123900257,
            "unit": "iter/sec",
            "range": "stddev: 7.971557132839491e-8",
            "extra": "mean: 530.867524774462 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 426.01802734188345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000907963218354401",
            "extra": "mean: 2.347318507245917 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.43872506821913,
            "unit": "iter/sec",
            "range": "stddev: 0.00006003210881703948",
            "extra": "mean: 32.85288716129879 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10545.444948509878,
            "unit": "iter/sec",
            "range": "stddev: 0.000002019191079545012",
            "extra": "mean: 94.82767250530334 usec\nrounds: 6223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.23296924713166,
            "unit": "iter/sec",
            "range": "stddev: 0.00008728217990399553",
            "extra": "mean: 9.41327355421726 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3625597208461058,
            "unit": "iter/sec",
            "range": "stddev: 0.0003447774791382988",
            "extra": "mean: 733.9127853999912 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.70909264930515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004860411979348921",
            "extra": "mean: 6.108396203393437 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1997.4818999937347,
            "unit": "iter/sec",
            "range": "stddev: 0.00009701556745685611",
            "extra": "mean: 500.630318604207 usec\nrounds: 430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.34011807648608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000519102103980812",
            "extra": "mean: 5.607263305562703 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6028750.6593863005,
            "unit": "iter/sec",
            "range": "stddev: 8.00131378571768e-9",
            "extra": "mean: 165.87184584296486 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.57844360174481,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892907495200768",
            "extra": "mean: 9.942488312502107 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.28901417887823,
            "unit": "iter/sec",
            "range": "stddev: 0.014789209392109549",
            "extra": "mean: 12.006385354163504 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2061.859796984529,
            "unit": "iter/sec",
            "range": "stddev: 0.00010843985404796966",
            "extra": "mean: 484.99902925625713 usec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.2287031140506,
            "unit": "iter/sec",
            "range": "stddev: 0.00026470802231141454",
            "extra": "mean: 3.555824810650484 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6357100658042916,
            "unit": "iter/sec",
            "range": "stddev: 0.006160385962298658",
            "extra": "mean: 611.3552890000051 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.607549479478756,
            "unit": "iter/sec",
            "range": "stddev: 0.00009461444844817323",
            "extra": "mean: 19.759897688891215 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 233.2366170482673,
            "unit": "iter/sec",
            "range": "stddev: 0.00024797292553846065",
            "extra": "mean: 4.287491443905887 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9270611402757016,
            "unit": "iter/sec",
            "range": "stddev: 0.002048752543933162",
            "extra": "mean: 1.0786775074000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4518522.978706607,
            "unit": "iter/sec",
            "range": "stddev: 2.3937133385858723e-8",
            "extra": "mean: 221.311256955183 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1890363.4882536123,
            "unit": "iter/sec",
            "range": "stddev: 1.0492875625125914e-7",
            "extra": "mean: 528.9987910863836 nsec\nrounds: 126567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7192977.305264062,
            "unit": "iter/sec",
            "range": "stddev: 3.5401148055301486e-9",
            "extra": "mean: 139.02448979902536 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2113.8847384711644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008030527796641459",
            "extra": "mean: 473.06268965413653 usec\nrounds: 1276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14027.07241098666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012609445078224125",
            "extra": "mean: 71.29071346468227 usec\nrounds: 6959"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 763.8816249920761,
            "unit": "iter/sec",
            "range": "stddev: 0.000020723908400715053",
            "extra": "mean: 1.3091033574873243 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.30318408700109,
            "unit": "iter/sec",
            "range": "stddev: 0.00007179635422377267",
            "extra": "mean: 8.904467029405877 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 223.33463644835604,
            "unit": "iter/sec",
            "range": "stddev: 0.004194506817235855",
            "extra": "mean: 4.477585814286536 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.49087740838893,
            "unit": "iter/sec",
            "range": "stddev: 0.022456830915007532",
            "extra": "mean: 13.073454428571214 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.26092481228533,
            "unit": "iter/sec",
            "range": "stddev: 0.0003891688419434838",
            "extra": "mean: 22.593292034477194 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.6625047128944,
            "unit": "iter/sec",
            "range": "stddev: 0.000012392114643856018",
            "extra": "mean: 852.7602749990137 usec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.68957515886292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007810260852478877",
            "extra": "mean: 10.450459188890843 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9306499543843633,
            "unit": "iter/sec",
            "range": "stddev: 0.002097453011944858",
            "extra": "mean: 1.0745178627999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 230.2116197584931,
            "unit": "iter/sec",
            "range": "stddev: 0.009832651669533109",
            "extra": "mean: 4.343829390753885 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.83000135674176,
            "unit": "iter/sec",
            "range": "stddev: 0.0007125492048275004",
            "extra": "mean: 9.917683095747945 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16962001647884686,
            "unit": "iter/sec",
            "range": "stddev: 0.09175659628535202",
            "extra": "mean: 5.895530614600011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 203.44250073739403,
            "unit": "iter/sec",
            "range": "stddev: 0.000020047283952901763",
            "extra": "mean: 4.915393766668312 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148800.30224693747,
            "unit": "iter/sec",
            "range": "stddev: 2.9731700151436647e-7",
            "extra": "mean: 6.7204164568192715 usec\nrounds: 37735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2111.2861738941065,
            "unit": "iter/sec",
            "range": "stddev: 0.00008266616029054681",
            "extra": "mean: 473.64493376829927 usec\nrounds: 1072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.7093017498739,
            "unit": "iter/sec",
            "range": "stddev: 0.0005700407518819743",
            "extra": "mean: 9.831942435896623 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2042.053386392142,
            "unit": "iter/sec",
            "range": "stddev: 0.00008043125586862132",
            "extra": "mean: 489.70316185845627 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4491.990522871197,
            "unit": "iter/sec",
            "range": "stddev: 0.000026441711290294134",
            "extra": "mean: 222.6184572092148 usec\nrounds: 853"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2043.6243234281537,
            "unit": "iter/sec",
            "range": "stddev: 0.00008236664535360026",
            "extra": "mean: 489.326726314606 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.70577325992565,
            "unit": "iter/sec",
            "range": "stddev: 0.0007528658631960248",
            "extra": "mean: 9.92991729897113 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4751293936880976,
            "unit": "iter/sec",
            "range": "stddev: 0.0030197494277135143",
            "extra": "mean: 404.0192818000264 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.31172992753827,
            "unit": "iter/sec",
            "range": "stddev: 0.0007279331106955374",
            "extra": "mean: 9.679442989691387 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.43877893125676,
            "unit": "iter/sec",
            "range": "stddev: 0.00024376611673637607",
            "extra": "mean: 3.6571257519088123 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.61919243528807,
            "unit": "iter/sec",
            "range": "stddev: 0.000662473009345967",
            "extra": "mean: 9.840660765305808 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.65188789835744,
            "unit": "iter/sec",
            "range": "stddev: 0.01896262731473168",
            "extra": "mean: 11.540429461536934 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.931302619936,
            "unit": "iter/sec",
            "range": "stddev: 0.02822916905474415",
            "extra": "mean: 27.077301071427332 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.08290141639156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856507113780222",
            "extra": "mean: 10.300475010640328 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12420.61066593337,
            "unit": "iter/sec",
            "range": "stddev: 0.000013587798178933384",
            "extra": "mean: 80.5113393291322 usec\nrounds: 5337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6090437.679446,
            "unit": "iter/sec",
            "range": "stddev: 6.578612496258571e-9",
            "extra": "mean: 164.19181225263966 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.01955874712965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557016982662779",
            "extra": "mean: 9.522035818183548 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.36454797977369,
            "unit": "iter/sec",
            "range": "stddev: 0.00024564687168958984",
            "extra": "mean: 14.62746452000033 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.4059783028056,
            "unit": "iter/sec",
            "range": "stddev: 0.00014280970069933466",
            "extra": "mean: 1.847042773954567 msec\nrounds: 407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.5467531340993,
            "unit": "iter/sec",
            "range": "stddev: 0.00025883450664474465",
            "extra": "mean: 9.94562200000928 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5582470.296175287,
            "unit": "iter/sec",
            "range": "stddev: 7.712413197320847e-9",
            "extra": "mean: 179.13216675517415 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.72929211044,
            "unit": "iter/sec",
            "range": "stddev: 0.004189631932093996",
            "extra": "mean: 6.183171811060241 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11371206.75249879,
            "unit": "iter/sec",
            "range": "stddev: 3.095988951782761e-8",
            "extra": "mean: 87.94141393840613 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7704916253153323,
            "unit": "iter/sec",
            "range": "stddev: 0.001627461119767017",
            "extra": "mean: 1.2978726402000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.05098635363996,
            "unit": "iter/sec",
            "range": "stddev: 0.0004525281971700825",
            "extra": "mean: 11.757653178083368 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.11959358154473,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670229126591711",
            "extra": "mean: 3.5699037943552243 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.3306567149075,
            "unit": "iter/sec",
            "range": "stddev: 0.0002504407773740839",
            "extra": "mean: 3.5928489222238076 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.96662186905949,
            "unit": "iter/sec",
            "range": "stddev: 0.000738743771013862",
            "extra": "mean: 27.051430437493806 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 992505.7619350918,
            "unit": "iter/sec",
            "range": "stddev: 1.127000518472778e-7",
            "extra": "mean: 1.0075508257506705 usec\nrounds: 91735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.62619319641203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007832106196463763",
            "extra": "mean: 10.037520936170974 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.4270064095598,
            "unit": "iter/sec",
            "range": "stddev: 0.00006274200959237849",
            "extra": "mean: 1.4610761858242658 msec\nrounds: 522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.07953391917015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006522201583723555",
            "extra": "mean: 9.42688908080963 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.7455969835383,
            "unit": "iter/sec",
            "range": "stddev: 0.00012110425785168537",
            "extra": "mean: 5.298136835940159 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.88894087020282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221952481201518",
            "extra": "mean: 10.215658593404985 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2004.5275559053246,
            "unit": "iter/sec",
            "range": "stddev: 0.00009631851378700645",
            "extra": "mean: 498.8706675814991 usec\nrounds: 1456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.29036681888657,
            "unit": "iter/sec",
            "range": "stddev: 0.02421427854336496",
            "extra": "mean: 12.454794262625933 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.60591412074575,
            "unit": "iter/sec",
            "range": "stddev: 0.00025314632001335863",
            "extra": "mean: 3.7792050239046326 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2548336.8122795527,
            "unit": "iter/sec",
            "range": "stddev: 1.4871949041106417e-8",
            "extra": "mean: 392.41280633742895 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.4678204601781,
            "unit": "iter/sec",
            "range": "stddev: 0.00036308760856828133",
            "extra": "mean: 3.752798361442085 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.9166782620523,
            "unit": "iter/sec",
            "range": "stddev: 0.000016225324098866557",
            "extra": "mean: 565.6375169123063 usec\nrounds: 1360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.31977883380303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002496321711300798",
            "extra": "mean: 18.754766465123296 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.69640146759546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006919078056577135",
            "extra": "mean: 9.930841474228892 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.48342182505569,
            "unit": "iter/sec",
            "range": "stddev: 0.025131287669950483",
            "extra": "mean: 12.424919037036831 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.700230131037344,
            "unit": "iter/sec",
            "range": "stddev: 0.0016203912745231988",
            "extra": "mean: 53.47527773683755 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2082.913882980031,
            "unit": "iter/sec",
            "range": "stddev: 0.00008239317972850033",
            "extra": "mean: 480.0966608227207 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8570.516750193863,
            "unit": "iter/sec",
            "range": "stddev: 0.00001363753942175401",
            "extra": "mean: 116.67907888720714 usec\nrounds: 4348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.584930369408212,
            "unit": "iter/sec",
            "range": "stddev: 0.00014402321989004707",
            "extra": "mean: 116.48318122222969 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.09410793189545,
            "unit": "iter/sec",
            "range": "stddev: 0.000047812177064368575",
            "extra": "mean: 7.806760327584121 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 318.8519952771822,
            "unit": "iter/sec",
            "range": "stddev: 0.000023076552102699296",
            "extra": "mean: 3.136251347998268 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.13945515439767,
            "unit": "iter/sec",
            "range": "stddev: 0.0007453468362766467",
            "extra": "mean: 10.510886344441891 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.37068676255379,
            "unit": "iter/sec",
            "range": "stddev: 0.0003687004544456819",
            "extra": "mean: 17.131886833333 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.46115362363216,
            "unit": "iter/sec",
            "range": "stddev: 0.00023305226426220408",
            "extra": "mean: 6.193440202533246 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2006.4645742839052,
            "unit": "iter/sec",
            "range": "stddev: 0.00008941019630791053",
            "extra": "mean: 498.3890634385577 usec\nrounds: 1198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.93632647132443,
            "unit": "iter/sec",
            "range": "stddev: 0.00021833608799796405",
            "extra": "mean: 3.8769258044433426 msec\nrounds: 225"
          }
        ]
      }
    ]
  }
}