window.BENCHMARK_DATA = {
  "lastUpdate": 1678110221449,
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
          "id": "77c95530c3a6408e22aed14c1e985185bec6fff1",
          "message": "test: make the serial test execution faster for postgres\n\nDo this by avoiding a full VACUUM ANALYZE.",
          "timestamp": "2023-03-06T08:37:50-05:00",
          "tree_id": "69d40184088ad1abd0b93dedd07bf7a97df54214",
          "url": "https://github.com/ibis-project/ibis/commit/77c95530c3a6408e22aed14c1e985185bec6fff1"
        },
        "date": 1678110127164,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1582565.5324158513,
            "unit": "iter/sec",
            "range": "stddev: 1.328403721120021e-7",
            "extra": "mean: 631.8853655769053 nsec\nrounds: 85463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.5767120375831,
            "unit": "iter/sec",
            "range": "stddev: 0.00009103977801722518",
            "extra": "mean: 7.268672038962675 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.37974422036315,
            "unit": "iter/sec",
            "range": "stddev: 0.00016691830028487713",
            "extra": "mean: 12.758398358490673 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.343999815369457,
            "unit": "iter/sec",
            "range": "stddev: 0.017192006728905602",
            "extra": "mean: 35.280835679999996 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.89653220070758,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975214520339938",
            "extra": "mean: 14.105062249998449 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 268.1990018402952,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558781087285262",
            "extra": "mean: 3.7285746521736547 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14612356556174055,
            "unit": "iter/sec",
            "range": "stddev: 0.07426889390722294",
            "extra": "mean: 6.843523124799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 636.9514902992202,
            "unit": "iter/sec",
            "range": "stddev: 0.000015765812985350795",
            "extra": "mean: 1.5699782718621649 msec\nrounds: 526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.86646112494908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934542432654922",
            "extra": "mean: 50.33609124999927 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.320787201141492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816618311827106",
            "extra": "mean: 75.07063846153983 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 156.11894652663398,
            "unit": "iter/sec",
            "range": "stddev: 0.005211750868022826",
            "extra": "mean: 6.405372456375111 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 78.08107381876248,
            "unit": "iter/sec",
            "range": "stddev: 0.0018052653911868983",
            "extra": "mean: 12.80720091428488 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 836.8571408757501,
            "unit": "iter/sec",
            "range": "stddev: 0.00027908607725911464",
            "extra": "mean: 1.1949470837442158 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8565.013304057384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006456003364810995",
            "extra": "mean: 116.7540509862704 usec\nrounds: 3903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.06585386507741,
            "unit": "iter/sec",
            "range": "stddev: 0.00017559736963336747",
            "extra": "mean: 9.99341894736978 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4636.280597751106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000584214933198647",
            "extra": "mean: 215.69013758249753 usec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 256.92374656578284,
            "unit": "iter/sec",
            "range": "stddev: 0.000232764507626994",
            "extra": "mean: 3.8922054242423236 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.410317864568072,
            "unit": "iter/sec",
            "range": "stddev: 0.002133618240504706",
            "extra": "mean: 709.0600105999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.69798015377313,
            "unit": "iter/sec",
            "range": "stddev: 0.00006834578951325825",
            "extra": "mean: 6.071719878205747 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 647709.0164183831,
            "unit": "iter/sec",
            "range": "stddev: 4.0896281036714405e-7",
            "extra": "mean: 1.5439031643092904 usec\nrounds: 19879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4426.340120733084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000666271054156014",
            "extra": "mean: 225.92028012397324 usec\nrounds: 1610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.15282131633315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587963715031158",
            "extra": "mean: 8.916405207314808 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.82271398192238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008498106642039061",
            "extra": "mean: 12.849718916668628 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 297.4357874863663,
            "unit": "iter/sec",
            "range": "stddev: 0.00001855184842242394",
            "extra": "mean: 3.362070208333076 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.086269890570733,
            "unit": "iter/sec",
            "range": "stddev: 0.02972883957011123",
            "extra": "mean: 34.38048274193394 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 239.30081922447948,
            "unit": "iter/sec",
            "range": "stddev: 0.0003927746705905959",
            "extra": "mean: 4.178840687803647 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.04063789967738,
            "unit": "iter/sec",
            "range": "stddev: 0.0044042486221405434",
            "extra": "mean: 12.189081235848516 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.20642934315262,
            "unit": "iter/sec",
            "range": "stddev: 0.00162014774661711",
            "extra": "mean: 13.660002392857251 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 99.96414700311598,
            "unit": "iter/sec",
            "range": "stddev: 0.015582069914785912",
            "extra": "mean: 10.00358658558682 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4563.764961953344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000612349941620481",
            "extra": "mean: 219.11733148763832 usec\nrounds: 2890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4761.993447139474,
            "unit": "iter/sec",
            "range": "stddev: 0.00006417408760212072",
            "extra": "mean: 209.99608905398628 usec\nrounds: 2156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4602842.155732012,
            "unit": "iter/sec",
            "range": "stddev: 1.915155079559849e-8",
            "extra": "mean: 217.25706990727934 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1004372736946206,
            "unit": "iter/sec",
            "range": "stddev: 0.0036598604508401135",
            "extra": "mean: 476.0913417999973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.18403394272005,
            "unit": "iter/sec",
            "range": "stddev: 0.00020369841911403486",
            "extra": "mean: 108.88461499999949 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.8667165952855145,
            "unit": "iter/sec",
            "range": "stddev: 0.00018596382899118585",
            "extra": "mean: 205.47734400000195 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 262.8323729310929,
            "unit": "iter/sec",
            "range": "stddev: 0.000266803779861434",
            "extra": "mean: 3.804706356557422 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4559.649091074019,
            "unit": "iter/sec",
            "range": "stddev: 0.00006569754016762443",
            "extra": "mean: 219.3151227267911 usec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5631283.977424782,
            "unit": "iter/sec",
            "range": "stddev: 1.492830181172055e-8",
            "extra": "mean: 177.5793946832125 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.71278820919198,
            "unit": "iter/sec",
            "range": "stddev: 0.0009774501459966672",
            "extra": "mean: 11.14668287500109 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 117.46198979801716,
            "unit": "iter/sec",
            "range": "stddev: 0.0008917757721322292",
            "extra": "mean: 8.51339230434934 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6538956157931747,
            "unit": "iter/sec",
            "range": "stddev: 0.01259410745904117",
            "extra": "mean: 1.529296076999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1600175.0446869505,
            "unit": "iter/sec",
            "range": "stddev: 1.298228762171017e-7",
            "extra": "mean: 624.9316306489673 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60966.66743896371,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018125556548662",
            "extra": "mean: 16.40240547838935 usec\nrounds: 11135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.65136468097162,
            "unit": "iter/sec",
            "range": "stddev: 0.0008595389848705547",
            "extra": "mean: 11.675237209876713 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5898100627683308,
            "unit": "iter/sec",
            "range": "stddev: 0.004062507729472747",
            "extra": "mean: 1.695461069800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1476.7834425259505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073963040904437335",
            "extra": "mean: 677.1473536360614 usec\nrounds: 1100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 113.01377675714082,
            "unit": "iter/sec",
            "range": "stddev: 0.00008432843362346255",
            "extra": "mean: 8.848478731481865 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1493828.1841073744,
            "unit": "iter/sec",
            "range": "stddev: 1.1930986480609596e-7",
            "extra": "mean: 669.4210288966682 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4430.845486382742,
            "unit": "iter/sec",
            "range": "stddev: 0.00002635140685813172",
            "extra": "mean: 225.69056020420632 usec\nrounds: 1960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4394.998403963863,
            "unit": "iter/sec",
            "range": "stddev: 0.000059185472414041205",
            "extra": "mean: 227.5313681793597 usec\nrounds: 1961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.41850535341684,
            "unit": "iter/sec",
            "range": "stddev: 0.00043554919793790074",
            "extra": "mean: 22.513139333335904 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143052.0013327643,
            "unit": "iter/sec",
            "range": "stddev: 3.7451986548135647e-7",
            "extra": "mean: 6.990464940604521 usec\nrounds: 30862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.31430393860768,
            "unit": "iter/sec",
            "range": "stddev: 0.00017610603363090542",
            "extra": "mean: 7.979934999997339 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.32546826352517,
            "unit": "iter/sec",
            "range": "stddev: 0.0009176156920548466",
            "extra": "mean: 11.71983020253144 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.07932854714156,
            "unit": "iter/sec",
            "range": "stddev: 0.0009153799672496764",
            "extra": "mean: 32.17572730000219 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 117.92377580015855,
            "unit": "iter/sec",
            "range": "stddev: 0.0008603026494726105",
            "extra": "mean: 8.480054113045586 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.189894024966836,
            "unit": "iter/sec",
            "range": "stddev: 0.031017545051099337",
            "extra": "mean: 33.123667117645624 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.15862140927103,
            "unit": "iter/sec",
            "range": "stddev: 0.000797256255327169",
            "extra": "mean: 11.091562674417398 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6487632062316115,
            "unit": "iter/sec",
            "range": "stddev: 0.011242518233006309",
            "extra": "mean: 1.5413944415999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.84073557779536,
            "unit": "iter/sec",
            "range": "stddev: 0.000481378508346741",
            "extra": "mean: 8.862047866664017 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5117331.2575673675,
            "unit": "iter/sec",
            "range": "stddev: 1.3254198321294689e-8",
            "extra": "mean: 195.41435753675535 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 567.136549075893,
            "unit": "iter/sec",
            "range": "stddev: 0.00019842249088919335",
            "extra": "mean: 1.7632437931031355 msec\nrounds: 464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.02367746276698,
            "unit": "iter/sec",
            "range": "stddev: 0.000920241934040398",
            "extra": "mean: 11.761429637502019 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.25130788615085,
            "unit": "iter/sec",
            "range": "stddev: 0.0009669166102954954",
            "extra": "mean: 21.621010209301186 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10960.662178690643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029319751780026254",
            "extra": "mean: 91.23536367576104 usec\nrounds: 4691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 262.5826284478339,
            "unit": "iter/sec",
            "range": "stddev: 0.00030008147959528656",
            "extra": "mean: 3.8083250438582055 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 254.46889982835486,
            "unit": "iter/sec",
            "range": "stddev: 0.00027930688716936645",
            "extra": "mean: 3.9297533045276776 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11850.23395361706,
            "unit": "iter/sec",
            "range": "stddev: 0.000001958404855542479",
            "extra": "mean: 84.3865196175953 usec\nrounds: 5862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.013788656771766,
            "unit": "iter/sec",
            "range": "stddev: 0.00014342096430200308",
            "extra": "mean: 19.225671227273853 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 117.51806448685034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008326172185821218",
            "extra": "mean: 8.50933007079856 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 422778.6764449937,
            "unit": "iter/sec",
            "range": "stddev: 3.759486847927724e-7",
            "extra": "mean: 2.3653037764550233 usec\nrounds: 1748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6831188392186296,
            "unit": "iter/sec",
            "range": "stddev: 0.0026131170728617022",
            "extra": "mean: 1.463874135200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.89967812584732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000231526376425145",
            "extra": "mean: 5.750441925926524 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 267.317543960736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002759008315914351",
            "extra": "mean: 3.7408693241132043 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.65891418263105,
            "unit": "iter/sec",
            "range": "stddev: 0.0008417118393228422",
            "extra": "mean: 11.40785291860417 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9258703.487251936,
            "unit": "iter/sec",
            "range": "stddev: 4.918757955984133e-9",
            "extra": "mean: 108.0064829138106 nsec\nrounds: 91735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 251.58796003672762,
            "unit": "iter/sec",
            "range": "stddev: 0.00021246911760288177",
            "extra": "mean: 3.9747530042932766 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.4349864229144,
            "unit": "iter/sec",
            "range": "stddev: 0.00011207647105914822",
            "extra": "mean: 15.519519061221988 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 121.39947460216816,
            "unit": "iter/sec",
            "range": "stddev: 0.005242678189688239",
            "extra": "mean: 8.23726793939634 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1404068.2604367821,
            "unit": "iter/sec",
            "range": "stddev: 0.000002892889205158559",
            "extra": "mean: 712.2160853411192 nsec\nrounds: 84027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.56718959204069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007916914531060406",
            "extra": "mean: 8.434036460177083 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.41127720753315,
            "unit": "iter/sec",
            "range": "stddev: 0.000028053593314695823",
            "extra": "mean: 2.215274740556065 msec\nrounds: 397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.82937564605996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008845190043203335",
            "extra": "mean: 8.48684799114811 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4389.485164220404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007622021886565758",
            "extra": "mean: 227.81714998178043 usec\nrounds: 2707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 261.79763968287625,
            "unit": "iter/sec",
            "range": "stddev: 0.00029481983591880107",
            "extra": "mean: 3.8197441398300285 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 238.34326785592492,
            "unit": "iter/sec",
            "range": "stddev: 0.00012184223502230925",
            "extra": "mean: 4.195629308080503 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7042.241197871549,
            "unit": "iter/sec",
            "range": "stddev: 0.000017804587650218445",
            "extra": "mean: 142.0002484865529 usec\nrounds: 3469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4659.171490772924,
            "unit": "iter/sec",
            "range": "stddev: 0.00006578642487167937",
            "extra": "mean: 214.6304341835048 usec\nrounds: 1960"
          }
        ]
      }
    ]
  }
}