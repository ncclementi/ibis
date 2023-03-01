window.BENCHMARK_DATA = {
  "lastUpdate": 1677684610470,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "899d83aa9cebe4417964bd9836e7df05c082a1fe",
          "message": "chore(nix): remove cachix install nix workaround\n\nFixed in the latest release of the cachix/install-nix-action",
          "timestamp": "2023-03-01T10:16:23-05:00",
          "tree_id": "2dc93989b1b66dd00cfafaba0e07ebe6c0cf31f6",
          "url": "https://github.com/ibis-project/ibis/commit/899d83aa9cebe4417964bd9836e7df05c082a1fe"
        },
        "date": 1677684232971,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.24082725225117,
            "unit": "iter/sec",
            "range": "stddev: 0.0066351541993989495",
            "extra": "mean: 10.179067379311846 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13251.381256846167,
            "unit": "iter/sec",
            "range": "stddev: 0.000005040466518777697",
            "extra": "mean: 75.46383132576175 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2528740.658958244,
            "unit": "iter/sec",
            "range": "stddev: 1.7052799221317536e-8",
            "extra": "mean: 395.45375934764587 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7950.360493185872,
            "unit": "iter/sec",
            "range": "stddev: 0.00001237982031192581",
            "extra": "mean: 125.78046000015773 usec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 265.3054417937216,
            "unit": "iter/sec",
            "range": "stddev: 0.00602201817187976",
            "extra": "mean: 3.769240439393297 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 196.10571263623936,
            "unit": "iter/sec",
            "range": "stddev: 0.00008302480964136676",
            "extra": "mean: 5.099290513045489 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.8914292843625,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365649389851501",
            "extra": "mean: 8.411035227848233 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1151.9278367001739,
            "unit": "iter/sec",
            "range": "stddev: 0.000014291000966397693",
            "extra": "mean: 868.1099354839901 usec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.0427393146871,
            "unit": "iter/sec",
            "range": "stddev: 0.000548732048742141",
            "extra": "mean: 14.696645227276278 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5296.765000773557,
            "unit": "iter/sec",
            "range": "stddev: 0.000023864517555598202",
            "extra": "mean: 188.79448113215454 usec\nrounds: 1484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.38713838325467,
            "unit": "iter/sec",
            "range": "stddev: 0.00004448236609765709",
            "extra": "mean: 7.174263074763972 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70726.78055105814,
            "unit": "iter/sec",
            "range": "stddev: 4.849645416024844e-7",
            "extra": "mean: 14.138915870461448 usec\nrounds: 14026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5247.899167592866,
            "unit": "iter/sec",
            "range": "stddev: 0.00004555597129965395",
            "extra": "mean: 190.552441665659 usec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.58739186740208,
            "unit": "iter/sec",
            "range": "stddev: 0.00015623095125836655",
            "extra": "mean: 13.968940254902044 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.76197759556474,
            "unit": "iter/sec",
            "range": "stddev: 0.00014578701045295123",
            "extra": "mean: 10.125354152941837 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2506454.8111174377,
            "unit": "iter/sec",
            "range": "stddev: 1.689764313090206e-8",
            "extra": "mean: 398.96988988763314 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 726682.9173011219,
            "unit": "iter/sec",
            "range": "stddev: 2.3274145280184377e-7",
            "extra": "mean: 1.37611601455277 usec\nrounds: 21187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 245.2449796836081,
            "unit": "iter/sec",
            "range": "stddev: 0.0038948677969918737",
            "extra": "mean: 4.077555435752877 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 210.7741466239842,
            "unit": "iter/sec",
            "range": "stddev: 0.012535187475450666",
            "extra": "mean: 4.744414891566255 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5645.405193752659,
            "unit": "iter/sec",
            "range": "stddev: 0.00007720132597423732",
            "extra": "mean: 177.13520388343852 usec\nrounds: 721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.51077929397941,
            "unit": "iter/sec",
            "range": "stddev: 0.0002773317958716206",
            "extra": "mean: 9.568391000004794 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.74108625588296,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299376233732077",
            "extra": "mean: 9.82887087999984 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 477979.4530353454,
            "unit": "iter/sec",
            "range": "stddev: 3.6448945829105534e-7",
            "extra": "mean: 2.0921401404383224 usec\nrounds: 1998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.29920837567357,
            "unit": "iter/sec",
            "range": "stddev: 0.00015274803240526217",
            "extra": "mean: 6.523190893128486 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141120.9701442724,
            "unit": "iter/sec",
            "range": "stddev: 3.314145022758932e-7",
            "extra": "mean: 7.086119086183071 usec\nrounds: 39526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.4957686754163,
            "unit": "iter/sec",
            "range": "stddev: 0.00026426181004399223",
            "extra": "mean: 3.565116168141483 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.434986956261127,
            "unit": "iter/sec",
            "range": "stddev: 0.0008386016435254453",
            "extra": "mean: 95.83145663636762 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.28993548668097,
            "unit": "iter/sec",
            "range": "stddev: 0.01484336159744012",
            "extra": "mean: 12.773033899997586 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5231.88842242405,
            "unit": "iter/sec",
            "range": "stddev: 0.00004813495805298162",
            "extra": "mean: 191.1355746261649 usec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.35771374194582,
            "unit": "iter/sec",
            "range": "stddev: 0.0006252879605962094",
            "extra": "mean: 7.124652955223725 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8510310301097702,
            "unit": "iter/sec",
            "range": "stddev: 0.00113119451328691",
            "extra": "mean: 1.175045285799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.96940292141795,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107948992479641",
            "extra": "mean: 6.945920311594435 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9154602970112932,
            "unit": "iter/sec",
            "range": "stddev: 0.0022603557917505934",
            "extra": "mean: 1.0923466624000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.0512085492194,
            "unit": "iter/sec",
            "range": "stddev: 0.006690532139463496",
            "extra": "mean: 3.583571650518828 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6432708.940835414,
            "unit": "iter/sec",
            "range": "stddev: 8.795125705136177e-9",
            "extra": "mean: 155.45550237037932 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.74195573161776,
            "unit": "iter/sec",
            "range": "stddev: 0.00019164717105369823",
            "extra": "mean: 5.270315656567065 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 130.71187930857707,
            "unit": "iter/sec",
            "range": "stddev: 0.0006609573255999547",
            "extra": "mean: 7.650414065574389 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.599538337326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001645560237140773",
            "extra": "mean: 3.1094572000010126 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 174.96307922468102,
            "unit": "iter/sec",
            "range": "stddev: 0.0042030491637393965",
            "extra": "mean: 5.715491545023837 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.412962281261,
            "unit": "iter/sec",
            "range": "stddev: 0.00020498366138601792",
            "extra": "mean: 3.274255265822934 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17972316083328893,
            "unit": "iter/sec",
            "range": "stddev: 0.1042885437833174",
            "extra": "mean: 5.564113135800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.8943611942572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000185373817213898",
            "extra": "mean: 1.457950460853523 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5680.17059713607,
            "unit": "iter/sec",
            "range": "stddev: 0.00004581097121259242",
            "extra": "mean: 176.051050386444 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.00598110941388,
            "unit": "iter/sec",
            "range": "stddev: 0.000631389419978389",
            "extra": "mean: 9.614831659998515 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.76898674799716,
            "unit": "iter/sec",
            "range": "stddev: 0.01206023638502594",
            "extra": "mean: 11.139704659998415 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 140.042167111467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006685348749385055",
            "extra": "mean: 7.140706407406898 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.737341306914054,
            "unit": "iter/sec",
            "range": "stddev: 0.0008113174483345624",
            "extra": "mean: 21.863973100002454 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6773220162144324,
            "unit": "iter/sec",
            "range": "stddev: 0.0015785832252129942",
            "extra": "mean: 1.4764026210000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.7318402499802,
            "unit": "iter/sec",
            "range": "stddev: 0.000026319006221107918",
            "extra": "mean: 1.8459317427946522 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 733.9079569877526,
            "unit": "iter/sec",
            "range": "stddev: 0.000021233669842243506",
            "extra": "mean: 1.3625686851855292 msec\nrounds: 594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5406.055831983898,
            "unit": "iter/sec",
            "range": "stddev: 0.00004681108282716874",
            "extra": "mean: 184.9777418286527 usec\nrounds: 2417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5767448.386313804,
            "unit": "iter/sec",
            "range": "stddev: 1.0822887741341351e-8",
            "extra": "mean: 173.38690058730177 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.1487647662474,
            "unit": "iter/sec",
            "range": "stddev: 0.013415502565164772",
            "extra": "mean: 11.34445845783315 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.6190667625646,
            "unit": "iter/sec",
            "range": "stddev: 0.00023714710727746813",
            "extra": "mean: 3.2090462576281995 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.14055375653385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000677842500202467",
            "extra": "mean: 2.823737607547439 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.98245219879787,
            "unit": "iter/sec",
            "range": "stddev: 0.0013372240607431498",
            "extra": "mean: 25.0109721891962 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.8738140085152,
            "unit": "iter/sec",
            "range": "stddev: 0.0006330225786257185",
            "extra": "mean: 7.525937352380922 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.12840703100795,
            "unit": "iter/sec",
            "range": "stddev: 0.0001553167502428973",
            "extra": "mean: 3.3542593607860764 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5793.9893684381495,
            "unit": "iter/sec",
            "range": "stddev: 0.00004456672786200563",
            "extra": "mean: 172.5926535950072 usec\nrounds: 2448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.93315719905382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000824888315595875",
            "extra": "mean: 13.169477431032732 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.659385217428046,
            "unit": "iter/sec",
            "range": "stddev: 0.00029732435377144336",
            "extra": "mean: 17.047570415090103 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.96360753399597,
            "unit": "iter/sec",
            "range": "stddev: 0.00006374785087386985",
            "extra": "mean: 6.212584417808834 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5178104764181324,
            "unit": "iter/sec",
            "range": "stddev: 0.0018409515275189987",
            "extra": "mean: 397.17048179996937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.35822524169008,
            "unit": "iter/sec",
            "range": "stddev: 0.00006286147541842433",
            "extra": "mean: 10.377941244681029 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.376132723815104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002481027048246171",
            "extra": "mean: 20.671350595739327 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12361805.037051667,
            "unit": "iter/sec",
            "range": "stddev: 3.2582618616991314e-9",
            "extra": "mean: 80.89433517199731 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1662501.446770549,
            "unit": "iter/sec",
            "range": "stddev: 8.051979957977111e-8",
            "extra": "mean: 601.5032359475688 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5601.727941549766,
            "unit": "iter/sec",
            "range": "stddev: 0.00006150702575583458",
            "extra": "mean: 178.51634539097972 usec\nrounds: 2267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.9079062917339,
            "unit": "iter/sec",
            "range": "stddev: 0.0006446923297760484",
            "extra": "mean: 9.353845142857502 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2554624.8626095643,
            "unit": "iter/sec",
            "range": "stddev: 1.722061332135599e-8",
            "extra": "mean: 391.44690660295566 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7769229063274972,
            "unit": "iter/sec",
            "range": "stddev: 0.002348115136254084",
            "extra": "mean: 562.7706168000145 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1737.6578869543723,
            "unit": "iter/sec",
            "range": "stddev: 0.000004690503347143974",
            "extra": "mean: 575.4872737076687 usec\nrounds: 1297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.791952348358258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751478319814596",
            "extra": "mean: 37.32464088460793 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.63192953649315,
            "unit": "iter/sec",
            "range": "stddev: 0.00023516281663354244",
            "extra": "mean: 7.427658531247161 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 125.03037775100734,
            "unit": "iter/sec",
            "range": "stddev: 0.011202564215416322",
            "extra": "mean: 7.998056296298307 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.28459821722515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435550327568515",
            "extra": "mean: 3.264937270175021 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.35906834895432,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897960291244287",
            "extra": "mean: 9.491351961161536 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.16801501115993,
            "unit": "iter/sec",
            "range": "stddev: 0.0008084706232017658",
            "extra": "mean: 26.904853533333533 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9201322334031191,
            "unit": "iter/sec",
            "range": "stddev: 0.004201057551480825",
            "extra": "mean: 1.0868003137999949 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.77263662290456,
            "unit": "iter/sec",
            "range": "stddev: 0.00007290536350515871",
            "extra": "mean: 63.40094074999669 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11657.962154944613,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154562338076257",
            "extra": "mean: 85.77828497889399 usec\nrounds: 4853"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5289.3636421075025,
            "unit": "iter/sec",
            "range": "stddev: 0.000044281040019431696",
            "extra": "mean: 189.05865954066988 usec\nrounds: 2432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.2576476228543,
            "unit": "iter/sec",
            "range": "stddev: 0.00020231876194113366",
            "extra": "mean: 3.3304730384621997 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11862.350313905203,
            "unit": "iter/sec",
            "range": "stddev: 0.000001551247384579915",
            "extra": "mean: 84.30032611899742 usec\nrounds: 5406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 142.77465498641504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005670937626759254",
            "extra": "mean: 7.00404424087139 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7147815.513000548,
            "unit": "iter/sec",
            "range": "stddev: 4.663022140395423e-9",
            "extra": "mean: 139.90288336083387 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.563348905904375,
            "unit": "iter/sec",
            "range": "stddev: 0.00037321377735938005",
            "extra": "mean: 179.74784916665953 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 138.99846515418872,
            "unit": "iter/sec",
            "range": "stddev: 0.0009351545851183027",
            "extra": "mean: 7.194324044446939 msec\nrounds: 135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e00920abeec9dd920ca9ee112e61b960af5174e5",
          "message": "refactor(rules): remove unused `non_negative_integer` and `pair` rules",
          "timestamp": "2023-03-01T10:17:30-05:00",
          "tree_id": "67c9ccc9ae87549edec0e655664d3099de6d0344",
          "url": "https://github.com/ibis-project/ibis/commit/e00920abeec9dd920ca9ee112e61b960af5174e5"
        },
        "date": 1677684531572,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.3074717741638,
            "unit": "iter/sec",
            "range": "stddev: 0.00002993001183992897",
            "extra": "mean: 856.6723200016213 usec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 281.06166667600013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000713569050931754",
            "extra": "mean: 3.5579380561802885 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.2663891420044,
            "unit": "iter/sec",
            "range": "stddev: 0.0004059686989724508",
            "extra": "mean: 7.392819504852658 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.7913938884401,
            "unit": "iter/sec",
            "range": "stddev: 0.00791040110011703",
            "extra": "mean: 34.73260113333746 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1823085.8832616152,
            "unit": "iter/sec",
            "range": "stddev: 1.4140030587603965e-7",
            "extra": "mean: 548.5205108444684 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7218433283976498,
            "unit": "iter/sec",
            "range": "stddev: 0.0009581983113205563",
            "extra": "mean: 580.7729330000086 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.72300468289032,
            "unit": "iter/sec",
            "range": "stddev: 0.000026063042874845046",
            "extra": "mean: 5.032130032432516 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.9571544923473,
            "unit": "iter/sec",
            "range": "stddev: 0.00021790628399358624",
            "extra": "mean: 3.1750350348821734 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 733066.3636465969,
            "unit": "iter/sec",
            "range": "stddev: 3.077120629207925e-7",
            "extra": "mean: 1.3641329756634268 usec\nrounds: 25907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1913961.6998466067,
            "unit": "iter/sec",
            "range": "stddev: 1.2610924312478655e-7",
            "extra": "mean: 522.476494738711 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.91822471489002,
            "unit": "iter/sec",
            "range": "stddev: 0.00010456571946800705",
            "extra": "mean: 7.411897111107161 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2707881.2217860627,
            "unit": "iter/sec",
            "range": "stddev: 2.6524875641811317e-8",
            "extra": "mean: 369.29241650441287 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5510.89440724449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009144699069058528",
            "extra": "mean: 181.4587480909494 usec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.1418483382968,
            "unit": "iter/sec",
            "range": "stddev: 0.00021384610120314627",
            "extra": "mean: 3.1531631830981035 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1869713.3626994325,
            "unit": "iter/sec",
            "range": "stddev: 9.612367568222072e-8",
            "extra": "mean: 534.8413398277434 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.367926576131,
            "unit": "iter/sec",
            "range": "stddev: 0.00037273427512443517",
            "extra": "mean: 10.376896499998852 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146447.96028730308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010772648460781064",
            "extra": "mean: 6.828364137255241 usec\nrounds: 34844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.21934637503507,
            "unit": "iter/sec",
            "range": "stddev: 0.0006312415080121141",
            "extra": "mean: 9.32667502469349 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1784.535072060852,
            "unit": "iter/sec",
            "range": "stddev: 0.000008273768591370077",
            "extra": "mean: 560.3700457650073 usec\nrounds: 1464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4766.351347918119,
            "unit": "iter/sec",
            "range": "stddev: 0.00015345632792000476",
            "extra": "mean: 209.8040884956555 usec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 139.79112907054642,
            "unit": "iter/sec",
            "range": "stddev: 0.0006733954178295908",
            "extra": "mean: 7.153529745763367 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.05098284400712,
            "unit": "iter/sec",
            "range": "stddev: 0.0009186694402263367",
            "extra": "mean: 26.98983733333667 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.611639890170344,
            "unit": "iter/sec",
            "range": "stddev: 0.00110588112792967",
            "extra": "mean: 178.20102850000316 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.14466788937123,
            "unit": "iter/sec",
            "range": "stddev: 0.0007215927856871901",
            "extra": "mean: 10.852499910256324 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5423127.464002502,
            "unit": "iter/sec",
            "range": "stddev: 2.276016695388861e-8",
            "extra": "mean: 184.39544462831728 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.8183978906259,
            "unit": "iter/sec",
            "range": "stddev: 0.0003508793333787823",
            "extra": "mean: 12.528439888887357 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5368.025658012748,
            "unit": "iter/sec",
            "range": "stddev: 0.000056312255432869286",
            "extra": "mean: 186.28823029325864 usec\nrounds: 647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 139.89060114436256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066616902466791",
            "extra": "mean: 7.148443082091215 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.31220976672347,
            "unit": "iter/sec",
            "range": "stddev: 0.00025821244195097724",
            "extra": "mean: 3.2646429626868763 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11958127.1127817,
            "unit": "iter/sec",
            "range": "stddev: 3.985790285099723e-9",
            "extra": "mean: 83.62513548880588 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.401090108409848,
            "unit": "iter/sec",
            "range": "stddev: 0.0008114079835825045",
            "extra": "mean: 64.93046874999742 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 218.5738077091954,
            "unit": "iter/sec",
            "range": "stddev: 0.003995933721956544",
            "extra": "mean: 4.575113598837351 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5624.77784983843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005448083585893949",
            "extra": "mean: 177.78479909721676 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.108201445023994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003673057741816293",
            "extra": "mean: 19.566331268293187 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74357.12871732443,
            "unit": "iter/sec",
            "range": "stddev: 6.316097136741665e-7",
            "extra": "mean: 13.448609665948686 usec\nrounds: 13263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.2590296165622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005637730856513143",
            "extra": "mean: 1.474362973929483 msec\nrounds: 537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12313.914661312278,
            "unit": "iter/sec",
            "range": "stddev: 0.000010867951789283853",
            "extra": "mean: 81.20894350046042 usec\nrounds: 4531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.683066284451929,
            "unit": "iter/sec",
            "range": "stddev: 0.0004739289389973376",
            "extra": "mean: 93.60608400000233 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.83081867227149,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365094456483665",
            "extra": "mean: 24.491304179485077 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.53982458085054,
            "unit": "iter/sec",
            "range": "stddev: 0.0007892466583287761",
            "extra": "mean: 9.848352645160967 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.2816750261954,
            "unit": "iter/sec",
            "range": "stddev: 0.00003185829207439838",
            "extra": "mean: 1.3310586870964638 msec\nrounds: 620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 113.8017363715158,
            "unit": "iter/sec",
            "range": "stddev: 0.0174254154706582",
            "extra": "mean: 8.787212145299891 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.66601879370576,
            "unit": "iter/sec",
            "range": "stddev: 0.0007939105089681125",
            "extra": "mean: 9.375056942305312 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.90536611562729,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117185594235008",
            "extra": "mean: 9.910275721650935 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.91967178161292,
            "unit": "iter/sec",
            "range": "stddev: 0.000522991040431473",
            "extra": "mean: 9.622817151515827 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6190830.136572852,
            "unit": "iter/sec",
            "range": "stddev: 8.085492586465043e-9",
            "extra": "mean: 161.52922595806504 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5756.09161481552,
            "unit": "iter/sec",
            "range": "stddev: 0.00009702547196209424",
            "extra": "mean: 173.72899302473132 usec\nrounds: 2437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.853212339141353,
            "unit": "iter/sec",
            "range": "stddev: 0.01580988311017178",
            "extra": "mean: 1.1720411838000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.9214708428505,
            "unit": "iter/sec",
            "range": "stddev: 0.00005927068511683494",
            "extra": "mean: 1.8659450206898547 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.0099488169741,
            "unit": "iter/sec",
            "range": "stddev: 0.00391738387794145",
            "extra": "mean: 6.060240653181348 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.486912922903091,
            "unit": "iter/sec",
            "range": "stddev: 0.0022439837738027777",
            "extra": "mean: 402.1049514000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5329.148683566594,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812601311530082",
            "extra": "mean: 187.64723211489357 usec\nrounds: 1943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 489196.7386132576,
            "unit": "iter/sec",
            "range": "stddev: 4.684615635650797e-7",
            "extra": "mean: 2.0441673483652685 usec\nrounds: 1954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 313.1891488807903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002511251763149468",
            "extra": "mean: 3.1929586435979354 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.66655779779802,
            "unit": "iter/sec",
            "range": "stddev: 0.0001343571309734345",
            "extra": "mean: 6.63717293748789 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.690419372381059,
            "unit": "iter/sec",
            "range": "stddev: 0.001810610210297978",
            "extra": "mean: 1.448395048000009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.43133802464095,
            "unit": "iter/sec",
            "range": "stddev: 0.0007354597660243953",
            "extra": "mean: 7.551082809523032 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.57727089993645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002525798344569786",
            "extra": "mean: 10.354403170452997 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6966158.014348036,
            "unit": "iter/sec",
            "range": "stddev: 3.8976656345085016e-8",
            "extra": "mean: 143.55115085533922 nsec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.32779112609834,
            "unit": "iter/sec",
            "range": "stddev: 0.000452863208879124",
            "extra": "mean: 22.061520651162525 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17023718794392426,
            "unit": "iter/sec",
            "range": "stddev: 0.0108776730546726",
            "extra": "mean: 5.874157180799989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.4989706823171,
            "unit": "iter/sec",
            "range": "stddev: 0.00003884291557040907",
            "extra": "mean: 3.395597606616844 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.73888106427866,
            "unit": "iter/sec",
            "range": "stddev: 0.0008297768613361314",
            "extra": "mean: 9.6395872959183 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8311178863796854,
            "unit": "iter/sec",
            "range": "stddev: 0.004093928313794547",
            "extra": "mean: 1.2031987476000041 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14098.552259208092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015443111287336465",
            "extra": "mean: 70.92926859542452 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5431.415182138612,
            "unit": "iter/sec",
            "range": "stddev: 0.000054643832671617575",
            "extra": "mean: 184.11407827715564 usec\nrounds: 2159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.16791383793445,
            "unit": "iter/sec",
            "range": "stddev: 0.00008609519723496578",
            "extra": "mean: 8.321688943927738 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12632.1507785141,
            "unit": "iter/sec",
            "range": "stddev: 0.00000200641056903497",
            "extra": "mean: 79.16308295661653 usec\nrounds: 6859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.2377411257755,
            "unit": "iter/sec",
            "range": "stddev: 0.00009078084828941138",
            "extra": "mean: 13.291201796293864 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.24809108894975,
            "unit": "iter/sec",
            "range": "stddev: 0.0013801030231743654",
            "extra": "mean: 18.1001728800004 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8437.093743458478,
            "unit": "iter/sec",
            "range": "stddev: 0.000013156530467455692",
            "extra": "mean: 118.5242253323698 usec\nrounds: 3750"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.012610577837076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006222874122110254",
            "extra": "mean: 41.644784799990475 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.94487329584285,
            "unit": "iter/sec",
            "range": "stddev: 0.00022131338430626544",
            "extra": "mean: 3.3339459648429326 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8563567001608592,
            "unit": "iter/sec",
            "range": "stddev: 0.00857547332562057",
            "extra": "mean: 1.1677376959999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 139.69451468065787,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434376521879998",
            "extra": "mean: 7.15847721212249 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 109.54360041765104,
            "unit": "iter/sec",
            "range": "stddev: 0.016082745675965876",
            "extra": "mean: 9.128785215999415 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5138.247491536473,
            "unit": "iter/sec",
            "range": "stddev: 0.00005940156215355492",
            "extra": "mean: 194.6188854560163 usec\nrounds: 3204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.3401826615478,
            "unit": "iter/sec",
            "range": "stddev: 0.00006049694435918931",
            "extra": "mean: 5.119274418477583 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.22701399091779,
            "unit": "iter/sec",
            "range": "stddev: 0.00012913445096140227",
            "extra": "mean: 15.816024462955731 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.48151845159185,
            "unit": "iter/sec",
            "range": "stddev: 0.00022115572194506689",
            "extra": "mean: 3.130071513515487 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.43066748427844,
            "unit": "iter/sec",
            "range": "stddev: 0.00025081431048368014",
            "extra": "mean: 3.339671278168275 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.41676048151416,
            "unit": "iter/sec",
            "range": "stddev: 0.0007026383752095047",
            "extra": "mean: 7.121656962963833 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4965.415931355022,
            "unit": "iter/sec",
            "range": "stddev: 0.00007897041474526855",
            "extra": "mean: 201.39299785246953 usec\nrounds: 2328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 332.1869157230527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006067665686775671",
            "extra": "mean: 3.010353366337009 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.50093425514916,
            "unit": "iter/sec",
            "range": "stddev: 0.00006502160759863872",
            "extra": "mean: 6.153810773972907 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 232.74547879323268,
            "unit": "iter/sec",
            "range": "stddev: 0.011463093789672535",
            "extra": "mean: 4.2965388852446145 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.64262949644272,
            "unit": "iter/sec",
            "range": "stddev: 0.0008059356646317655",
            "extra": "mean: 9.556334782604011 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 137.41620159625472,
            "unit": "iter/sec",
            "range": "stddev: 0.0008280897538710013",
            "extra": "mean: 7.2771622878801425 msec\nrounds: 132"
          }
        ]
      }
    ]
  }
}