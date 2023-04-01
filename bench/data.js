window.BENCHMARK_DATA = {
  "lastUpdate": 1680342776352,
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
          "id": "2f09f530dafce9d85886086d85fac7fe17720ae7",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.3.1.2823",
          "timestamp": "2023-04-01T05:46:58-04:00",
          "tree_id": "fc38fbb502d7a6795bdd3b1bfa59ef2c141082a1",
          "url": "https://github.com/ibis-project/ibis/commit/2f09f530dafce9d85886086d85fac7fe17720ae7"
        },
        "date": 1680342681409,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.35852171043976,
            "unit": "iter/sec",
            "range": "stddev: 0.0007084919024976259",
            "extra": "mean: 10.597876925930693 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 68.22511052007204,
            "unit": "iter/sec",
            "range": "stddev: 0.01639567698233826",
            "extra": "mean: 14.657359913045461 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 944.2832639604344,
            "unit": "iter/sec",
            "range": "stddev: 0.00023360332342582568",
            "extra": "mean: 1.0590042608675314 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3809.1460398654344,
            "unit": "iter/sec",
            "range": "stddev: 0.00021691328447429688",
            "extra": "mean: 262.5260332720997 usec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5634759.222349248,
            "unit": "iter/sec",
            "range": "stddev: 8.260488194481182e-8",
            "extra": "mean: 177.46987236552548 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9603727.411491891,
            "unit": "iter/sec",
            "range": "stddev: 7.131125709687618e-8",
            "extra": "mean: 104.12623736099873 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 222.09446272675396,
            "unit": "iter/sec",
            "range": "stddev: 0.008765925937424278",
            "extra": "mean: 4.502588618025631 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.654460205144972,
            "unit": "iter/sec",
            "range": "stddev: 0.004429470665218673",
            "extra": "mean: 214.84768499999518 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.37525983119497,
            "unit": "iter/sec",
            "range": "stddev: 0.0007181840531973934",
            "extra": "mean: 11.064975103450033 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 233.0335863609945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002716532626154187",
            "extra": "mean: 4.2912269240490115 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6866502378263841,
            "unit": "iter/sec",
            "range": "stddev: 0.015046887738563147",
            "extra": "mean: 1.4563455234000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.29724014049911,
            "unit": "iter/sec",
            "range": "stddev: 0.0011542825287860926",
            "extra": "mean: 11.587856093334116 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10167.058261167576,
            "unit": "iter/sec",
            "range": "stddev: 0.000023768210209139006",
            "extra": "mean: 98.35686727786694 usec\nrounds: 3820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.05664098228814,
            "unit": "iter/sec",
            "range": "stddev: 0.003926925948065073",
            "extra": "mean: 7.809044437908634 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 259.5211942585471,
            "unit": "iter/sec",
            "range": "stddev: 0.00032464362129189895",
            "extra": "mean: 3.853249839023758 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1464.1242203153697,
            "unit": "iter/sec",
            "range": "stddev: 0.00012512902146543132",
            "extra": "mean: 683.002156596113 usec\nrounds: 1175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.03504050912524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002699627916966862",
            "extra": "mean: 76.71629400000295 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.45685636448458,
            "unit": "iter/sec",
            "range": "stddev: 0.0213344394120919",
            "extra": "mean: 12.429021530120608 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7125982103619544,
            "unit": "iter/sec",
            "range": "stddev: 0.016641903000475793",
            "extra": "mean: 1.4033153402000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4584.639600648653,
            "unit": "iter/sec",
            "range": "stddev: 0.00014072936569659172",
            "extra": "mean: 218.11965325660847 usec\nrounds: 2088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.63051567415248,
            "unit": "iter/sec",
            "range": "stddev: 0.0010499405541273376",
            "extra": "mean: 10.138849961037607 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.76058448795587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006499870191668004",
            "extra": "mean: 27.20304951428716 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7127.852448796699,
            "unit": "iter/sec",
            "range": "stddev: 0.00003068229457385032",
            "extra": "mean: 140.29471109054967 usec\nrounds: 3264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.27740734305505,
            "unit": "iter/sec",
            "range": "stddev: 0.000752067083659042",
            "extra": "mean: 7.559869973914354 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 192.69231892794966,
            "unit": "iter/sec",
            "range": "stddev: 0.004144521953414537",
            "extra": "mean: 5.189620455882904 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 251.9060724312265,
            "unit": "iter/sec",
            "range": "stddev: 0.0004739037456291512",
            "extra": "mean: 3.969733600896074 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.939022316245103,
            "unit": "iter/sec",
            "range": "stddev: 0.0025970311550007293",
            "extra": "mean: 111.86905733333674 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5752893767005711,
            "unit": "iter/sec",
            "range": "stddev: 0.024710767758354412",
            "extra": "mean: 1.7382556335999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11985.501745238244,
            "unit": "iter/sec",
            "range": "stddev: 0.000013567631842356355",
            "extra": "mean: 83.4341374483795 usec\nrounds: 5784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.629211908352058,
            "unit": "iter/sec",
            "range": "stddev: 0.001687969787165426",
            "extra": "mean: 46.23376959998495 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4532.900572947628,
            "unit": "iter/sec",
            "range": "stddev: 0.00004142869593392231",
            "extra": "mean: 220.60929506550505 usec\nrounds: 2108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.96711883496344,
            "unit": "iter/sec",
            "range": "stddev: 0.0008943910948733103",
            "extra": "mean: 11.632354481016907 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.47974674237177,
            "unit": "iter/sec",
            "range": "stddev: 0.0010516665826096725",
            "extra": "mean: 12.90659871830898 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 99.08593454840583,
            "unit": "iter/sec",
            "range": "stddev: 0.0009162669995077155",
            "extra": "mean: 10.092249768421736 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1562687.3360240583,
            "unit": "iter/sec",
            "range": "stddev: 7.901327453619813e-7",
            "extra": "mean: 639.9232763633304 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.93601088472817,
            "unit": "iter/sec",
            "range": "stddev: 0.0009240728812225305",
            "extra": "mean: 21.769413162788563 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4722.810767321514,
            "unit": "iter/sec",
            "range": "stddev: 0.00006258611786215045",
            "extra": "mean: 211.73831628387225 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.4968347483976,
            "unit": "iter/sec",
            "range": "stddev: 0.0012460885796304728",
            "extra": "mean: 10.695549241758032 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4312.286914372203,
            "unit": "iter/sec",
            "range": "stddev: 0.00007654038866629448",
            "extra": "mean: 231.89551619748457 usec\nrounds: 2809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10962.414074688275,
            "unit": "iter/sec",
            "range": "stddev: 0.000019028329000658305",
            "extra": "mean: 91.22078341384271 usec\nrounds: 4751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1412213938233727,
            "unit": "iter/sec",
            "range": "stddev: 0.043827275190111",
            "extra": "mean: 7.081080089399995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 288.99679826524795,
            "unit": "iter/sec",
            "range": "stddev: 0.0003565299206271633",
            "extra": "mean: 3.4602459473692053 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4625.052723651396,
            "unit": "iter/sec",
            "range": "stddev: 0.00007491416212349073",
            "extra": "mean: 216.21375144249555 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142556.53167183275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027064380052724936",
            "extra": "mean: 7.014761009351819 usec\nrounds: 42554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 260.105259463486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002963613551297267",
            "extra": "mean: 3.8445973836233853 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.84045182023544,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126064712052661",
            "extra": "mean: 11.008311605262646 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 252.03802911717906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003326687060924771",
            "extra": "mean: 3.967655212599183 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.91064768274694,
            "unit": "iter/sec",
            "range": "stddev: 0.0002810859850860682",
            "extra": "mean: 12.208425012986837 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 684768.5519639218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010068532613431026",
            "extra": "mean: 1.4603474372939467 usec\nrounds: 24272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1243702168001675,
            "unit": "iter/sec",
            "range": "stddev: 0.00393832209151513",
            "extra": "mean: 470.7277441999963 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61623.30552202442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033406930188554803",
            "extra": "mean: 16.227626731944714 usec\nrounds: 12270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.63955193097492,
            "unit": "iter/sec",
            "range": "stddev: 0.0015220381833267963",
            "extra": "mean: 30.63767548386596 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.27896222731031,
            "unit": "iter/sec",
            "range": "stddev: 0.000356362990999998",
            "extra": "mean: 15.803040454548004 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 255.86687853925864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006583679460555487",
            "extra": "mean: 3.9082823291118793 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.33294726977094,
            "unit": "iter/sec",
            "range": "stddev: 0.0010332546285083638",
            "extra": "mean: 11.857761792684897 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4486415.110536801,
            "unit": "iter/sec",
            "range": "stddev: 3.9646730929334507e-7",
            "extra": "mean: 222.89511232537345 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 238.56954675440545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005053283209423628",
            "extra": "mean: 4.191649829596425 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5012198.341656678,
            "unit": "iter/sec",
            "range": "stddev: 3.0721868472818545e-7",
            "extra": "mean: 199.51325383263853 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.552912361721205,
            "unit": "iter/sec",
            "range": "stddev: 0.001318044552659026",
            "extra": "mean: 25.938377641033675 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.799347374532136,
            "unit": "iter/sec",
            "range": "stddev: 0.03394756686379007",
            "extra": "mean: 34.723009066667984 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.14477561119795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006360363429083773",
            "extra": "mean: 19.942256951224397 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.20110790222063,
            "unit": "iter/sec",
            "range": "stddev: 0.00026748186438209126",
            "extra": "mean: 8.75648247525062 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.84839581907823,
            "unit": "iter/sec",
            "range": "stddev: 0.00028805944939645463",
            "extra": "mean: 5.95775726732526 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.9502361270925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306940483528241",
            "extra": "mean: 7.465459031003097 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 560.5181706383704,
            "unit": "iter/sec",
            "range": "stddev: 0.00011807249758904071",
            "extra": "mean: 1.784063483367732 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.01354414933195,
            "unit": "iter/sec",
            "range": "stddev: 0.0009852612007054398",
            "extra": "mean: 10.099628375000927 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.51972870354143,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674680932907913",
            "extra": "mean: 11.831557144575871 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1622158.027432334,
            "unit": "iter/sec",
            "range": "stddev: 6.48410871107861e-7",
            "extra": "mean: 616.462750908967 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 438.3098486258292,
            "unit": "iter/sec",
            "range": "stddev: 0.00029184321072626344",
            "extra": "mean: 2.2814910573767815 msec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 398787.5911991502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011334822910358548",
            "extra": "mean: 2.5076005925686156 usec\nrounds: 1685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.46377689002972,
            "unit": "iter/sec",
            "range": "stddev: 0.00087101957135817",
            "extra": "mean: 21.068698395345375 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1604086.6452111802,
            "unit": "iter/sec",
            "range": "stddev: 8.055032889961274e-7",
            "extra": "mean: 623.4077211386225 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 260.78301026055794,
            "unit": "iter/sec",
            "range": "stddev: 0.00038323567151988283",
            "extra": "mean: 3.834605632479137 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4244.54745545435,
            "unit": "iter/sec",
            "range": "stddev: 0.00007399534140728848",
            "extra": "mean: 235.59637640874413 usec\nrounds: 2840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4602148057517497,
            "unit": "iter/sec",
            "range": "stddev: 0.0012919772471064316",
            "extra": "mean: 684.8307496000075 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 622.8006377522304,
            "unit": "iter/sec",
            "range": "stddev: 0.00014477809831764474",
            "extra": "mean: 1.6056502504704102 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4611.679039284206,
            "unit": "iter/sec",
            "range": "stddev: 0.000056645325922079314",
            "extra": "mean: 216.8407626553329 usec\nrounds: 1778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.69666236857304,
            "unit": "iter/sec",
            "range": "stddev: 0.00037190730122126184",
            "extra": "mean: 12.547576903224648 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.04670176442302,
            "unit": "iter/sec",
            "range": "stddev: 0.0008936680159182734",
            "extra": "mean: 10.096247347826315 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 234.5687886829021,
            "unit": "iter/sec",
            "range": "stddev: 0.00041767894614644504",
            "extra": "mean: 4.263141765854592 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.43219408671862,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225024966792391",
            "extra": "mean: 7.438694330577738 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.2362669891748,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456562839638835",
            "extra": "mean: 11.20620610587968 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.81237709847092,
            "unit": "iter/sec",
            "range": "stddev: 0.0008721406673987058",
            "extra": "mean: 9.919416928570445 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.74466085909232,
            "unit": "iter/sec",
            "range": "stddev: 0.0008538969652101326",
            "extra": "mean: 10.025599279070024 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1490118.9194673055,
            "unit": "iter/sec",
            "range": "stddev: 7.542642556951091e-7",
            "extra": "mean: 671.0873789573013 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.69206186753213,
            "unit": "iter/sec",
            "range": "stddev: 0.00032620108701743474",
            "extra": "mean: 11.66969236363876 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4223.476093439509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000947018884642368",
            "extra": "mean: 236.77179126296917 usec\nrounds: 2266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7208937642157528,
            "unit": "iter/sec",
            "range": "stddev: 0.021821515123064582",
            "extra": "mean: 1.3871669441999983 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}